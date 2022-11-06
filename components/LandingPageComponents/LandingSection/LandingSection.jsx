import Link from "next/link";
import Image from "next/image";

import landingBackground from "/public/stock-images/stock1.jpeg";

import styles from "./LandingSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const LandingSection = ({ mounted }) => {
  return (
    mounted && (
      <section className={cx("landing-section")} id="landing-section">
        <div className={cx("landing-section__background-wrap")}>
          <Image
            src={landingBackground}
            width={7360}
            height={4912}
            layout="responsive"
            alt="landing page header background image"
            placeholder="blur"
          />
        </div>
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
          <Link href="/services" passHref>
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
          <div className={cx("landing-section__left-overlay-polygon-wrap")}>
            <svg
              className={cx("landing-section__left-overlay-polygon")}
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 100,100 0,100" />
            </svg>
          </div>
        </div>
        <div className={cx("landing-section__right-overlay")}>
          <span className={cx("landing-section__right-overlay-square")}></span>
          <div className={cx("landing-section__right-overlay-polygon-wrap")}>
            <svg
              className={cx("landing-section__right-overlay-polygon")}
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 100,100 0,100" />
            </svg>
          </div>
          <polygon />
        </div>
      </section>
    )
  );
};

export default LandingSection;
