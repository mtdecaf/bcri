import { useState, useRef, useEffect } from "react";
import { useEffectOnce } from "/custom_hooks/useEffectOnce";
import { Rating } from "@mui/material";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./TestimonialCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialCard = ({ testimonialData, index, mounted, windowWidth }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [textHeight, setTextHeight] = useState(null);
  const [textContainerHeight, setTextContainerHeight] = useState(null);

  const testimonialTextRef = useRef();
  const testimonialTextContainerRef = useRef();
  const { name, company, testimonial, rating } = testimonialData;
  // convert \n to line break and indentation
  const formatedTestimonial = JSON.stringify(testimonial).replace(/\\n/g, "<br />").split("<br />");

  useEffect(() => {
    if (mounted) {
      setTextHeight(testimonialTextRef.current.offsetHeight);
      setTextContainerHeight(testimonialTextContainerRef.current.offsetHeight);
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      textHeight &&
        textContainerHeight &&
        setIsOverflowed(textHeight > textContainerHeight);
    }
  }, [textHeight, textContainerHeight]);

  useEffect(() => {
    // if the testimonial isn't expanded and is overflowed, add a class to the text box
    if (mounted && !isExpanded && isOverflowed) {
      testimonialTextRef.current.classList.add(
        cx("testimonial-card__content--fade")
      );
    } else if (mounted){
      testimonialTextRef.current.classList.remove(
        cx("testimonial-card__content--fade")
      );
    }
  }, [mounted, isExpanded, isOverflowed]);

  const testimonialCardStyle = {
    justifyContent:
      windowWidth < 768
        ? "center"
        : index === 0 || index % 2 === 0
        ? "flex-start"
        : "flex-end",
    height: "100%",
    maxHeight: isExpanded ? "100rem" : "441px",
    transition: "all 1s",
  };

  const testimonialCardTextWrapStyle = {
    height: "fit-content",
    maxHeight: isExpanded ? "100%" : "15rem",
    transition: "all 1s",
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    mounted && (
      <div className={cx("testimonial-card-wrap")} style={testimonialCardStyle}>
        <ScrollAnimation
          animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
          animateOnce
          animatePreScroll={false}
          className={cx("testimonial-card")}
        >
          <Rating
            className={cx("testimonial-card__rating")}
            value={rating}
            precision={0.5}
            readOnly
          />
          <div
            className={cx("testimonial-card__content-wrap")}
            style={testimonialCardTextWrapStyle}
            ref={testimonialTextContainerRef}
          >
            <p
              className={cx("testimonial-card__content")}
              ref={testimonialTextRef}
            >
              {/* map out the formatedTestimonial and add a line break in between */}
              {formatedTestimonial.map((line, key) => (
                <span key={key}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          {isOverflowed && isExpanded ? (
            <BsChevronCompactUp
              className={cx("testimonial-card__content-expand")}
              onClick={toggleExpand}
              size={24}
            />
          ) : isOverflowed ? (
            <BsChevronCompactDown
              className={cx("testimonial-card__content-expand")}
              onClick={toggleExpand}
              size={24}
            />
          ) : null}
          <div className={cx("testimonial-card__name-wrap")}>
            <p className={cx("testimonial-card__name")}>{name.toUpperCase()}</p>
          </div>
          <div className={cx("testimonial-card__company-wrap")}>
            <p className={cx("testimonial-card__company")}>{company}</p>
          </div>
        </ScrollAnimation>
      </div>
    )
  );
};

export default TestimonialCard;
