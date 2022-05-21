import { Rating } from '@mui/material';

import styles from "./TestimonialCard.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const TestimonialCard = ({ testimonialData, index }) => {
    console.log(index)
    return (
        <div className={cx("testimonial-card-wrap")} style={{ justifyContent: index === 0 || index % 2 ===0 ? "flex-start" : "flex-end" }}>
            <div className={cx("testimonial-card")}>
                <Rating className={cx("testimonial-card__rating")} value={testimonialData.rating} precision={0.5} readOnly />
                <div  className={cx("testimonial-card__content-wrap")}>
                    <p className={cx("testimonial-card__content")}>{testimonialData.testimonial}</p>
                </div>
                <div className={cx("testimonial-card__name-wrap")}>
                    <p className={cx("testimonial-card__name")}>{testimonialData.name.toUpperCase()}</p>
                </div>
                <div className={cx("testimonial-card__company-wrap")}>
                    <p className={cx("testimonial-card__company")}>{testimonialData.company}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;