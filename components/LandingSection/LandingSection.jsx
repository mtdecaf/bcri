import { useState, useEffect } from "react";

import styles from "./LandingSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const LandingSection = (porps) => {
  const hasWindow = typeof window !== "undefined";

  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    setMounted(true);
  }, []);

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const leftOverlayStyle = {
    transform: mounted ? "translateX(-60%)" : "translateX(0)",
    transition: "transform 0.5s",
  };

  const rightOverlayStyle = {
    transform: mounted ? "translateX(60%)" : "translateX(0)",
    transition: "transform 0.5s",
  };

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
              onClick={(e) => porps.scrollTo(e, "services-section")}
            >
              OUR SERVICES
            </button>
          </div>
        </div>
        <div className={cx("landing-section__left-overlay-wrap")} style={leftOverlayStyle}>
          <img className={cx("landing-section__left-overlay")}  src="" alt="" />
        </div>
        <div className={cx("landing-section__right-overlay-wrap")} style={rightOverlayStyle}>
          <img className={cx("landing-section__right-overlay")} src="" alt="" />
        </div>
      </section>
    )
  );
};

export default LandingSection;
