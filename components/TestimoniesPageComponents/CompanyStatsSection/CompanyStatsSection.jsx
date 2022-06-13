import CountUp from 'react-countup';

import styles from "./CompanyStatsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CompanyStatsSection = () => {
  return (
    <div className={cx("company-stats")}>
      <div className={cx("company-stats__inner-wrap")}>
        <div className={cx("company-stats__item-wrap", "company-stats__years-wrap")}>
          <CountUp className={cx("company-stats__count-up", "company-stats__years-number")} end={24} duration={1} />
          <h3 className={cx("company-stats__description","company-stats__years-desc")}>Years of Experience</h3>
        </div>
        <div className={cx("company-stats__item-wrap", "company-stats__clients-wrap")}>
          <CountUp className={cx("company-stats__count-up", "company-stats__clients-number")} end={50} duration={1} />
          <h3 className={cx("company-stats__description","company-stats__clients-desc")}>Clients</h3>
        </div>
        <div className={cx("company-stats__item-wrap", "company-stats__projects-wrap")}>
          <CountUp className={cx("company-stats__count-up", "company-stats__projects-number")} end={35} duration={1} />
          <h3 className={cx("company-stats__description","company-stats__projects-desc")}>Projects Completed</h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatsSection;
