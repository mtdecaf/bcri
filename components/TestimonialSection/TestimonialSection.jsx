import styles from "./TestimonialSection.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const TestimonialSection = () => {
    return(
        <section className={cx("testimonial-section")} id="testimonial-section">
            <div className={cx("testimonial-section__title-wrap")}>
                <h1 className={cx("testimonial-section__title")}>Testimonials</h1>
            </div>
        </section>
    )
}

export default TestimonialSection;