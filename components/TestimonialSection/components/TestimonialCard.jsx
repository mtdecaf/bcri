import { Rating } from '@mui/material';

import styles from "./TestimonialCard.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const TestimonialCard = (props) => {
    const { testimonialData } = props;
    console.log(testimonialData);
    return (
        <div className={cx("testimonial-card")}>
            <Rating className={cx("testimonial-card__rating")} value={testimonialData.rating} precision={0.5} readOnly />
            <div  className={cx("testimonial-card__content-wrap")}>
                <p className={cx("testimonial-card__content")}>{testimonialData.testimonial}</p>
            </div>
            <div className={cx("testimonial-card__name-wrap")}>
                <p className={cx("testimonial-card__name")}>{testimonialData.name.toUpperCase()}</p>
            </div>
            <div className={cx("testimonial-card__company")}>
                {testimonialData.company}
            </div>
        </div>
    );
}

export default TestimonialCard;