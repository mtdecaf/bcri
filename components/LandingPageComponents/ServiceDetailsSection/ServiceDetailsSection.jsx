import Description from "./components/Description";
import ServiceTab from "./components/ServiceTab";

import services from "../../../data/servicesData.json";

import styles from "./ServiceDetailsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceDetailsSection = () => {
  const { servicesData } = services;
  return (
    <section className={cx("service-details-section")}>
      <div className={cx("service-details-section__inner-wrap")}>
        <Description />
        <div className={cx("service-details-section__tab-wrap")}>
          {servicesData.map((data, key) => (
            <ServiceTab servicesData={data} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
