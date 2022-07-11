import Description from "./components/Description";
import ServiceTab from "./components/ServiceTab";

import styles from "./ServiceDetailsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceDetailsSection = () => {
  return (
    <section className={cx("service-details-section")}>
      <div className={cx("service-details-section__inner-wrap")}>
        <Description />
        <div className={cx("service-details-section__tab-wrap")}>
            <ServiceTab />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
