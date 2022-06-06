import styles from "./LandingSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const LandingSection = ({mounted, windowWidth}) => {

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
              REQUEST A QUOTE
            </button>
            <button
              className={cx(
                "landing-section__button",
                "landing-section__button--sub",
                "landing-section__button-service"
              )}
            >
              OUR SERVICES
            </button>
          </div>
        </div>
        <div className={cx("landing-section__left-overlay-wrap")}>
          <img className={cx("landing-section__left-overlay")} src="" alt="" />
        </div>
        <div className={cx("landing-section__right-overlay-wrap")}>
          <img className={cx("landing-section__right-overlay")} src="" alt="" />
        </div>
      </section>
    )
  );
};

export default LandingSection;
