import CompanyStatsSection from "../../components/TestimonialsPageComponents/CompanyStatsSection/CompanyStatsSection";
import TestimonialsSection from "../../components/TestimonialsPageComponents/TestimonialsSection/TestimonialsSection";

import tesimonials from "../../data/testimonialsData.json";

import styles from "./TestimonialsPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialsPage = () => {
  const { testimonialsData } = tesimonials;

  return (
    <div className="testimonials-page">
      <div className={cx("testimonials-page")}>
        <div className={cx("testimonials-page__title-wrap")}>
          <h2 className={cx("testimonials-page__title")}>Tesimonials</h2>
          <p className={cx("testimonials-page__subtext")}>See Why People Trust Us For Roofing Services</p>
        </div>
      </div>
      <CompanyStatsSection />
      <TestimonialsSection testimonialsData={testimonialsData} />
    </div>
  );
};

export default TestimonialsPage;
