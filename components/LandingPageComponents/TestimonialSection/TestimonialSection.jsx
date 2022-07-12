import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import tesimonials from "../../../data/testimonialsData.json";

import styles from "./TestimonialSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialSection = ({ mounted, windowWidth }) => {
  const { testimonialsData } = tesimonials;
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const PrevButton = ({ enabled, onClick }) => (
    <button
      className={cx(
        "testimonial-section__button",
        "testimonial-section__button--prev"
      )}
      onClick={onClick}
      // disabled={!enabled}
    >
      <IoChevronBack className={cx("testimonial-section__button__icon")} color="#514c50"/>
    </button>
  );

  const NextButton = ({ enabled, onClick }) => (
    <button
      className={cx(
        "testimonial-section__button",
        "testimonial-section__button--next"
      )}
      onClick={onClick}
      // disabled={!enabled}
    >
      <IoChevronForward className={cx("testimonial-section__button__icon")} color="#514c50"/>
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
    mounted && (
      <section className={cx("testimonial-section")} id="testimonial-section">
        <div className={cx("testimonial-section__inner-wrap")}>
          <div className={cx("testimonial-section__title-wrap")}>
            <h3 className={cx("testimonial-section__title")}>TESTIMONIALS</h3>
          </div>
          <div className={cx("testimonial-section__carousel-wrap")}>
            <PrevButton
              onClick={scrollPrev}
              // enabled={prevBtnEnabled}
            />
            <div
              className={cx("testimonial-section__viewport")}
              ref={viewportRef}
            >
              <div className={cx("testimonial-section__carousel")}>
                {testimonialsData.map((data, index) => (
                  <div className={cx("testimonial-section__slide")} key={index}>
                    <div className={cx("testimonial-section__slide__inner")}>
                      <div
                        className={cx("testimonial-section__slide__top-wrap")}
                      >
                        <div
                          className={cx("testimonial-section__content-wrap")}
                        >
                          <p className={cx("testimonial-section__content")}>
                            {data.testimonial}
                          </p>
                        </div>
                      </div>
                      <div
                        className={cx(
                          "testimonial-section__slide__bottom-wrap"
                        )}
                      >
                        <div className={cx("testimonial-section__author-wrap")}>
                          <i className={cx("testimonial-section__author")}>
                            -{data.name} {data.company}
                          </i>
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
        </div>
      </section>
    )
  );
};

export default TestimonialSection;
