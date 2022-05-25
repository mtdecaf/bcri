import TestimonialCard from "./components/TestimonialCard";
import Link from "next/link";

import styles from "./TestimonialSection.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const testimonialData = [
    {
        name: "John Doe",
        rating: 4.5,
        company: "Google",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl id libero consectetur fermentum. Nulla euismod, urna eu tempor consectetur, nisi nisl aliquam nunc, euismod aliquam nisl nisi euismod.",
    },
    {
        name: "John Smith",
        rating: 5,
        company: "Apple",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl id libero consectetur fermentum. Nulla euismod, urna eu tempor consectetur, nisi nisl aliquam nunc, euismod aliquam nisl nisi euismod.",
    },
    {
        name: "Shirley Jones",
        rating: 5,
        company: "Facebook",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl id libero consectetur fermentum. Nulla euismod, urna eu tempor consectetur, nisi nisl aliquam nunc, euismod aliquam nisl nisi euismod.",
    }
]
const TestimonialSection = () => {
    return(
        <section className={cx("testimonial-section")} id="testimonial-section">
            <div className={cx("testimonial-section__title-wrap")}>
                <h2 className={cx("testimonial-section__title")}>Why People Choose Us</h2>
            </div>
            <div className={cx("testimonial-section__cards-wrap")}>
                {testimonialData.map((data, key) => <TestimonialCard testimonialData={data} key={key} index={key} />)}
            </div>
            <div className={cx("testimonial-section__button-wrap")}>
                <Link href="/"><a className={cx("testimonial-section__button")}>SEE MORE TESTIMONIALS</a></Link>
            </div>
        </section>
    )
}

export default TestimonialSection;