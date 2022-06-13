import CompanyStatsSection from "../../components/TestimoniesPageComponents/CompanyStatsSection/CompanyStatsSection";

import styles from "./TestimoniesPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TestimoniesPage = () => {
  return (
    <div className="testimonies-page">
      <div className={cx("testimonies-page")}>
        <div className={cx("testimonies-page__title-wrap")}>
          <h2 className={cx("testimonies-page__title")}>Tesimonials</h2>
        </div>
      </div>
      <CompanyStatsSection />
    </div>
  );
};

export default TestimoniesPage;
