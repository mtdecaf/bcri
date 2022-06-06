import TestimonialCard from "./components/TestimonialCard";
import tesimonials from "../../../data/testimonialsData.json";
import Link from "next/link";

import styles from "./TestimonialSection.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const TestimonialSection = ({mounted, windowWidth}) => {
    const { testimonialsData } = tesimonials;
    return(
        <section className={cx("testimonial-section")} id="testimonial-section">
            <div className={cx("testimonial-section__title-wrap")}>
                <h2 className={cx("testimonial-section__title")}>Why People Choose Us</h2>
            </div>
            <div className={cx("testimonial-section__cards-wrap")}>
                {testimonialsData.map((data, key) => <TestimonialCard testimonialData={data} key={key} index={key} mounted={mounted} windowWidth={windowWidth} />)}
            </div>
            <div className={cx("testimonial-section__button-wrap")}>
                <Link href="/testimonies"><a className={cx("testimonial-section__button")}>SEE MORE TESTIMONIALS</a></Link>
            </div>
        </section>
    )
}

export default TestimonialSection;