import TestimonialCard from "./components/TestimonialCard";
import tesimonials from "../../../data/testimonialsData.json";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import styles from "./TestimonialSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialSection = ({ mounted, windowWidth }) => {
  const { testimonialsData } = tesimonials;
  // limit testimonials to 3
  const testimonials = testimonialsData.slice(0, 3);
  return (
    <section className={cx("testimonial-section")} id="testimonial-section">
      <div className={cx("testimonial-section__title-wrap")}>
        <h3 className={cx("testimonial-section__title")}>TESTIMONIALS</h3>
      </div>
      <div className={cx("testimonial-section__cards-wrap")}>
        {testimonials.map((data, key) => (
          <TestimonialCard
            testimonialData={data}
            key={key}
            index={key}
            mounted={mounted}
            windowWidth={windowWidth}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
