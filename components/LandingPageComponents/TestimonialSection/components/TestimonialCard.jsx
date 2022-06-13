import { Rating } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./TestimonialCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialCard = ({ testimonialData, index, mounted, windowWidth }) => {
  const testimonialCardStyle = {
    justifyContent:
      windowWidth < 768
        ? "center"
        : index === 0 || index % 2 === 0
        ? "flex-start"
        : "flex-end",
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
            <p className={cx("testimonial-card__content")}>
              {testimonialData.testimonial}
            </p>
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
