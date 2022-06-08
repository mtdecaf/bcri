import styles from "./ServicesTabs.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const servicesTabs = ({ servicesData, currentService }) => {
  const titles = servicesData.map((service) => service.title);
  const { selectedService, handleServiceSelected } = currentService;
  return (
    <div className={cx("services-tabs")}>
      <div className={cx("services-tabs__inner-wrap")}>
        {titles.map((title, index) => {
          return (
            <div
              className={cx("services-tabs__container")}
              key={index}
              style={
                selectedService === title ? { backgroundColor: "#cfcfcf" } : null
              }
              onClick={() => handleServiceSelected(title)}
            >
              <div className={cx("services-tabs__title")}>{title}</div>
              <div className={cx("services-tabs__content")}>
                <p>{servicesData[title]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default servicesTabs;
