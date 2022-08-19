import Link from "next/link";
import Image from "next/image";

import styles from "./LandingSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const LandingSection = ({ mounted }) => {
  return (
    mounted && (
      <section className={cx("landing-section")} id="landing-section">
        <div className={cx("landing-section__inner-wrap")}>
          <h1 className={cx("landing-section__title")}>
            Trusted Roof Inspections
          </h1>
          <a
            className={cx("landing-section__sub-text")}
            href="mailto: info@bcroofinspections.com"
          >
            BOOK YOUR CONSULTATION
          </a>
          <Link href="/services">
            <button
              className={cx(
                "landing-section__button",
                "blue-button",
                "landing-section__button-service"
              )}
            >
              OUR SERVICES
            </button>
          </Link>
        </div>
        <div className={cx("landing-section__left-overlay")}>
          <span className={cx("landing-section__left-overlay-square")}></span>
          <div className={cx("landing-section__left-overlay-polygon")}>
            <Image src="/svg-assets/landing_geometry.svg" layout="fill" />
          </div>
        </div>
        <div className={cx("landing-section__right-overlay")}>
          <span className={cx("landing-section__right-overlay-square")}></span>
          <div className={cx("landing-section__right-overlay-polygon")}>
            <Image src="/svg-assets/landing_geometry.svg" layout="fill" />
          </div>
        </div>
      </section>
    )
  );
};

export default LandingSection;
