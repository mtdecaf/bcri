import styles from "./ServiceDescription.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceDescription = ({ serviceSelectedData }) => {
  return (
    serviceSelectedData && (
      <div className={cx("service-description")}>
        <div className={cx("service-description__inner-wrap")}>
          <h2 className={cx("service-description__title")}>
            {serviceSelectedData.descriptionTitle}
          </h2>
          <p className={cx("service-description__content")}>
            {JSON.stringify(serviceSelectedData?.description)
              .split("\\n")
              .map((line, key) => (
                <span key={key}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </div>
      </div>
    )
  );
};

export default ServiceDescription;
