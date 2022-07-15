import Link from "next/link";

import styles from "./HeaderSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HeaderSection = ({ background }) => {
  return (
    <section className={cx("header-section")}>
      <div className={cx("header-section__background-wrap")}>
        <img
          className={cx("header-section__background")}
          src="/stock-images/services-stock-default.jpeg"
          alt=""
        />
      </div>
      <div className={cx("header-section__inner-wrap")}>
        <div className={cx("header-section__overlay-wrap")}>
          <span className={cx("header-section__overlay-square")}></span>
          <img
            className={cx("header-section__overlay-polygon")}
            src="/svg-assets/polygon_geometry.svg"
            alt="page overlay geometry"
          />
        </div>
        <div className={cx("header-section__content-container")}>
          <p className={cx("header-section__sub-text")}>WHAT WE DO</p>
          <h2 className={cx("header-section__title")}>
            Roofing Is Our Specialty
          </h2>
          <Link href="/projects">
            <button className={cx("header-section__button", "red-button")}>
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
