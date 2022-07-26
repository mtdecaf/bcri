import { useRouter } from "next/router";

import styles from "./HeaderSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HeaderSection = ({ background, serviceSelectedData }) => {
  const router = useRouter();
  const serviceQuery = router.query.service;
  // const
  return (
    <div className={cx("header-section")}>
      <div
        className={cx("header-section__background-wrap")}
      >
        <img
          className={cx("header-section__background")}
          src={`/stock-images/${background}.jpeg`}
          alt=""
          style={
            background === "services-stock-selected"
              ? {
                  width: "100%",
                  height: "auto",
                  marginRight: "-15%",
                }
              : null
          }
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
          <p className={cx("header-section__sub-text")}>
            {serviceQuery ? "OUR SERVICES" : "WHAT WE DO"}
          </p>
          <h2 className={cx("header-section__title")}>
            {serviceQuery
              ? serviceSelectedData.title
              : "Roofing Is Our Specialty"}
          </h2>
          <button className={cx("header-section__button", "red-button")}>
            <a href="mailto: info@bcroofinspections.com">CONTACT US</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
