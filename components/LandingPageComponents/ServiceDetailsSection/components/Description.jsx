import styles from "./Description.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const Description = () => {
  return (
    <div className={cx("description")}>
      <h3 className={cx("description__subtitle")}>OUR SERVICES</h3>
      <h2 className={cx("description__title")}>
        Commercial, Residential Inspections and More
      </h2>
      <p className={cx("description__content")}>
        BC Roof Inspections services are designed to free our clients with the
        hassles of their roof and its components. We know that commercial and
        industrial roofs are often quite troublesome, so we take care of the
        things that require attention. By doing that you have peace of mind and
        a sound roof.
      </p>
    </div>
  );
};

export default Description;
