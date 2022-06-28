import ServicesTabs from "../components/ServicesTabs/ServicesTabs";

import styles from "./ServicesDetailsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesDetailsSection = ({ servicesData, currentService }) => {
  const renderedService = servicesData.filter(
    (service) => service.title === currentService.selectedService
  )[0];

  return (
    <div className={cx("services-details")}>
      <div className={cx("services-details__title-wrap")}>
        <h2 className={cx("services-details__title")}>Our Services</h2>
        <p className={cx("services-details__subtext")}>We Offer A Wide Range Of Services That'll Suit Your Needs</p>
      </div>
      <ServicesTabs
        servicesData={servicesData}
        currentService={currentService}
      />
      <div className={cx("services-details__content")}>{renderedService.description}</div>
    </div>
  );
};

export default ServicesDetailsSection;
