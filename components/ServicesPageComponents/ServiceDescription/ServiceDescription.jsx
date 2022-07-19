import styles from "./ServiceDescription.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceDescription = ({ serviceSelectedData }) => {
  return (
    <div className={cx("service-description")}>
      <h2 className={cx("service-description__title")}>{serviceSelectedData.title}</h2>
      <p className={cx("service-description__title")}></p>
    </div>
  );
};

export default ServiceDescription;
