import styles from "./HeaderSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HeaderSection = ({
  projectCategorySelected,
  mounted,
  windowWidth,
}) => {
  console.log(projectCategorySelected);
  return (
    mounted &&
    projectCategorySelected && (
      <section className={cx("header-section")}>
        <div
          className={cx("header-section__primary-wrap")}
          style={
            windowWidth <= 1024 && windowWidth > 425
              ? { height: "14rem" }
              : { height: "30rem" }
          }
        >
          <div className={cx("header-section__background-wrap")}>
            {/* <img
              className={cx("header-section__background")}
              src={`/stock-images/${background}.jpeg`}
              alt=""
              style={
                background === "services-stock-selected" && windowWidth > 1024
                  ? {
                      marginTop: "-20rem",
                      marginRight: "-6rem",
                    }
                  : background === "services-stock-selected" &&
                    windowWidth <= 1024
                  ? {
                      minWidth: "30rem",
                      marginTop: "-10rem",
                      marginRight: "-5rem",
                    }
                  : null
              }
            /> */}
          </div>
          <div className={cx("header-section__inner-wrap")}>
            <div className={cx("header-section__overlay-wrap")}>
              <span
                className={cx("header-section__overlay-square")}
                style={
                  windowWidth > 425
                    ? { width: "50vw" }
                    : { width: "15vw", minWidth: "250px" }
                }
              ></span>
              {(windowWidth > 1024 || windowWidth <= 425) && (
                <img
                  className={cx("header-section__overlay-polygon")}
                  src="/svg-assets/polygon_geometry.svg"
                  alt="page overlay geometry"
                />
              )}
            </div>
            {(windowWidth > 1024 || windowWidth <= 425) && (
              <div className={cx("header-section__content-container")}>
                <p className={cx("header-section__sub-text")}>OUR PROJECTS</p>
                <h2 className={cx("header-section__title")}>
                  {`${
                    projectCategorySelected.charAt(0).toUpperCase() +
                    projectCategorySelected.slice(1)
                  } Roofing Projects`}
                </h2>
                <button className={cx("header-section__button", "red-button")}>
                  <a href="mailto: info@bcroofinspections.com">CONTACT US</a>
                </button>
              </div>
            )}
          </div>
        </div>
        {windowWidth <= 1024 && windowWidth > 425 && (
          <div className={cx("header-section__subcontent-container")}>
            <p className={cx("header-section__sub-text")}>OUR PROJECTS</p>
            <h2 className={cx("header-section__title")}>
              {`${
                projectCategorySelected.charAt(0).toUpperCase() +
                projectCategorySelected.slice(1)
              } Roofing Projects`}
            </h2>
            <button className={cx("header-section__button", "red-button")}>
              <a href="mailto: info@bcroofinspections.com">CONTACT US</a>
            </button>
          </div>
        )}
      </section>
    )
  );
};

export default HeaderSection;
