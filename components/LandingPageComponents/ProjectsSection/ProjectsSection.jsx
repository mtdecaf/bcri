import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

import styles from "./ProjectsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsSection = () => {
  return (
    <section className={cx("projects-section")}>
      <Parallax
        className={cx("projects-section__background-wrap")}
        translateY={[-30, 30]}
      >
        <img
          className={cx("projects-section__background")}
          src="/stock2.jpeg"
          alt=""
        />
      </Parallax>
      <div className={cx("projects-section__inner-wrap")}>
        <div className={cx("projects-section__overlay-wrap")}>
          <span className={cx("projects-section__overlay-square")}></span>
          <img
            className={cx("projects-section__overlay-polygon")}
            src="/svg-assets/projects_geometry.svg"
            alt=""
          />
        </div>
        <div className={cx("projects-section__content-container")}>
          <p className={cx("projects-section__sub-text")}>
            GETTING IT DONE RIGHT
          </p>
          <h2 className={cx("projects-section__title")}>
            Qualified, Trusted Inspectors for All Roofing Projects
          </h2>
          <Link href="/projects">
            <button className={cx("projects-section__button", "red-button")}>
              OUR PROJECTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
