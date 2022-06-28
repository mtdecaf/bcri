import React, { useState, useEffect, useCallback } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFillChatQuoteFill,
} from "react-icons/bs";
import { Rating } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";

import styles from "./TestimonialsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialsSection = ({ testimonialsData }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const formattedTestimonialsData = testimonialsData.map((data) => {
    return {
      ...data,
      testimonial: data.testimonial.replace(/\n/g, "<br />").split("<br />"),
    };
  });
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const renderTestimonials = (formatedTestimonial) => {
    return formatedTestimonial.map((line, key) => (
      <span key={key}>
        {line}
        <br />
      </span>
    ));
  };

  const DotButton = ({ selected, onClick }) => (
    <button
      className={cx(
        "testimonials-section__dot",
        `testimonials-section__dot${selected ? "--is-selected" : ""}`
      )}
      type="button"
      onClick={onClick}
    />
  );

  const PrevButton = ({ enabled, onClick }) => (
    <button
      className={cx("testimonials-section__button", "testimonials-section__button--prev")}
      onClick={onClick}
      // disabled={!enabled}
    >
      <BsChevronCompactLeft className={cx("testimonials-section__button__icon")} />
    </button>
  );

  const NextButton = ({ enabled, onClick }) => (
    <button
      className={cx("testimonials-section__button", "testimonials-section__button--next")}
      onClick={onClick}
      // disabled={!enabled}
    >
      <BsChevronCompactRight className={cx("testimonials-section__button__icon")} />
    </button>
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={cx("testimonials-section")}>
        <div className={cx("testimonials-section__wrap")}>
          <PrevButton
            onClick={scrollPrev}
            // enabled={prevBtnEnabled}
          />
          <div className={cx("testimonials-section__viewport")} ref={viewportRef}>
            <div className={cx("testimonials-section__container")}>
              {formattedTestimonialsData.map((testimonial, index) => (
                <div className={cx("testimonials-section__slide")} key={index}>
                  <div className={cx("testimonials-section__slide__inner")}>
                    <div className={cx("testimonials-section__slide__top-wrap")}>
                      <Rating
                        name="testimonials-section__rating"
                        value={testimonial.rating}
                        readOnly
                        className={cx("testimonials-section__rating")}
                      />
                      <div className={cx("testimonials-section__content-wrap")}>
                        <p className={cx("testimonials-section__content")}>{renderTestimonials(testimonial.testimonial)}</p>
                      </div>
                    </div>
                    <div className={cx("testimonials-section__slide__bottom-wrap")}>
                      <div className={cx("testimonials-section__author-wrap")}>
                        <p className={cx("testimonials-section__author")}>{testimonial.name.toUpperCase()}</p>
                      </div>
                      <div className={cx("testimonials-section__company-wrap")}>
                        <p className={cx("testimonials-section__company")}>{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NextButton
            onClick={scrollNext}
            // enabled={nextBtnEnabled}
          />
        </div>
        <div className={cx("testimonials-section__dots")}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
