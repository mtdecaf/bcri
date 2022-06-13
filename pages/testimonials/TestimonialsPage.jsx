import CompanyStatsSection from "../../components/TestimonialsPageComponents/CompanyStatsSection/CompanyStatsSection";

import styles from "./TestimonialsPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <div className={cx("testimonials-page")}>
        <div className={cx("testimonials-page__title-wrap")}>
          <h2 className={cx("testimonials-page__title")}>Tesimonials</h2>
        </div>
      </div>
      <CompanyStatsSection />
    </div>
  );
};

export default TestimonialsPage;
