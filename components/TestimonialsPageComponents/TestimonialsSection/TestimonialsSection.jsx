import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Carousel from 'react-spring-3d-carousel';

import styles from "./TestimonialsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialsSection = ({ testimonialsData }) => {
  console.log(testimonialsData);
  return (
    <div className={cx("testimonials-section")}>
      <div className={cx("testimonials-section__carousel-wrap")}>

      </div>
    </div>
  );
};

export default TestimonialsSection;
