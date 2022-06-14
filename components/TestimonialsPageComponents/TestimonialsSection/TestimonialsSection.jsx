import Slider from "react-slick";

import styles from "./TestimonialSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialSection = () => {
  return (
    <div className={cx("testimonials-section")}>
      <div className={cx("testimonials-section__carousel-wrap")}>
        <Slider className={cx("testimonials-section__carousel")}></Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
