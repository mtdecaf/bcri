import styles from "./LandingSection.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
let cx = classNames.bind(styles);

const LandingSection = ({ mounted, windowWidth }) => {
  return (
    mounted && (
      <section className={cx("landing-section")} id="landing-section">
        <div className={cx("landing-section__inner-wrap")}>
          {windowWidth >= 768 ? (
            <h1 className={cx("landing-section__title")}>
              The Roof Inspections <br></br> You Can Count On
            </h1>
          ) : (
            <h1 className={cx("landing-section__title")}>
              The <br></br> Roof <br></br> Inspections <br></br> You Can Count
              On
            </h1>
          )}
          <div className={cx("landing-section__button-wrap")}>
            <button
              className={cx(
                "landing-section__button",
                "landing-section__button--primary",
                "landing-section__button-contact"
              )}
            >
              <a href="mailto: info@bcroofinspections.com">
                REQUEST A QUOTE
              </a>
            </button>
            <Link href="/services">
              <button
                className={cx(
                  "landing-section__button",
                  "landing-section__button--sub",
                  "landing-section__button-service"
                )}
              >
                OUR SERVICES
              </button>
            </Link>
          </div>
        </div>
        <div className={cx("landing-section__left-overlay-wrap")}>
          <img className={cx("landing-section__left-overlay")} src="/svg-assets/landing_geometry.svg" alt="" />
        </div>
        <div className={cx("landing-section__bottom-overlay-wrap")}>
          <div className={cx("landing-section__bottom-overlay")}>
            <img
              className={cx("landing-section__bottom-overlay-image")}
              src="/partners/partner1.png"
              alt="business association Better Business Bureau Accredited Business"
            />
            <img
              className={cx("landing-section__bottom-overlay-image")}
              src="/partners/partner2.png"
              alt="business association"
            />
            <img
              className={cx("landing-section__bottom-overlay-image")}
              src="/partners/partner3.png"
              alt="business association RCABC Roofing Contractors Associations of British Columbia"
            />
          </div>
        </div>
      </section>
    )
  );
};

export default LandingSection;
