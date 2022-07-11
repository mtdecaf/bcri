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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul
        iriu feugiat nulla facilisis at vero. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lob.
      </p>
    </div>
  );
};

export default Description;
