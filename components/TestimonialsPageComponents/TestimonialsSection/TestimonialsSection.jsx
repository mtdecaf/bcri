import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const DotButton = ({ selected, onClick }) => (
    <button
      className={cx(
        "testimonials__dot",
        `testimonials__dot${selected ? "--is-selected" : ""}`
      )}
      type="button"
      onClick={onClick}
    />
  );

  const PrevButton = ({ enabled, onClick }) => (
    <button
      className={cx("testimonials__button", "testimonials__button--prev")}
      onClick={onClick}
      // disabled={!enabled}
    >
      <BsChevronCompactLeft className={cx("testimonials__button__icon")} />
    </button>
  );

  const NextButton = ({ enabled, onClick }) => (
    <button
      className={cx("testimonials__button", "testimonials__button--next")}
      onClick={onClick}
      disabled={!enabled}
    >
      <BsChevronCompactRight className={cx("testimonials__button__icon")} />
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
      <div className={cx("testimonials")}>
        <div className={cx("testimonials__wrap")}>
          <PrevButton onClick={scrollPrev} 
          // enabled={prevBtnEnabled}
           />
          <div className={cx("testimonials__viewport")} ref={viewportRef}>
            <div className={cx("testimonials__container")}>
              {testimonialsData.map((testimonial, index) => (
                <div className={cx("testimonials__slide")} key={index}>
                  <div className={cx("testimonials__slide__inner")}>
                    {testimonial.testimonial}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NextButton onClick={scrollNext} 
          // enabled={nextBtnEnabled}
           />
        </div>
        <div className={cx("testimonials__dots")}>
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
