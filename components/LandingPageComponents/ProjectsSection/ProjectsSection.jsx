import styles from "./ProjectsSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsSection = () => {
  return (
    <section className={cx("projects-section")}>
      <div className={cx("projects-section__inner-wrap")}>
        <p className={cx("projects-section__sub-text")}>
          GETTING IT DONE RIGHT
        </p>
        <h2 className={cx("projects-section__title")}>
          Qualified, Trusted Inspectors for All Roofing Projects
        </h2>
        <button className={cx("projects-section__button")}>OUR PROJECTS</button>
      </div>
    </section>
  );
};

export default ProjectsSection;
