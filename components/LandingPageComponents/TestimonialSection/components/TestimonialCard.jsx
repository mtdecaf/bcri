import { useState } from "react";
import { Rating } from "@mui/material";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./TestimonialCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialCard = ({ testimonialData, index, mounted, windowWidth }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const testimonialCardStyle = {
    justifyContent:
      windowWidth < 768
        ? "center"
        : index === 0 || index % 2 === 0
        ? "flex-start"
        : "flex-end",
  };

  const testimonialCardTextStyle = {
    maxHeight: isExpanded ? "100%" : "15rem",
    transition: "max-height 0.75s",
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
            value={testimonialData.rating}
            precision={0.5}
            readOnly
          />
          <div className={cx("testimonial-card__content-wrap")}>
            <p
              className={cx("testimonial-card__content")}
              style={testimonialCardTextStyle}
            >
              {testimonialData.testimonial}
            </p>
            {isExpanded ? (
              <BsChevronCompactUp
                className={cx("testimonial-card__content-expand")}
                onClick={toggleExpand}
                size={24}
              />
            ) : (
              <BsChevronCompactDown
                className={cx("testimonial-card__content-expand")}
                onClick={toggleExpand}
                size={24}
              />
            )}
          </div>
          <div className={cx("testimonial-card__name-wrap")}>
            <p className={cx("testimonial-card__name")}>
              {testimonialData.name.toUpperCase()}
            </p>
          </div>
          <div className={cx("testimonial-card__company-wrap")}>
            <p className={cx("testimonial-card__company")}>
              {testimonialData.company}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    )
  );
};

export default TestimonialCard;
