import ServicesCard from "../../ServicesCard/ServicesCard.jsx";

import styles from "./ServiceSelectionSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceSelectionSection = ({ servicesData }) => {
  return (
    <div className={cx("service-selection-section")}>
      <div className={cx("service-selection-section__inner-wrap")}>
        <div className={cx("service-selection-section__grid")}>
            {servicesData.map((service, key) => {
              return (
                <ServicesCard
                  icon={service.icon}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectionSection;
