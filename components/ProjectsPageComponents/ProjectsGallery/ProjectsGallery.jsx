import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../../data/projectsData.json";

import styles from "./ProjectsGallery.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsGallery = ({ projectCategorySelected, mounted }) => {
  const currentProjectData = projects[projectCategorySelected];

  return (
    mounted &&
    projectCategorySelected && (
      <section className={cx("projects-gallery")}>
        <div className={cx("projects-gallery__title-wrap")}>
          <h2 className={cx("projects-gallery__title")}>BC Roof Inspections</h2>
          <h2 className={cx("projects-gallery__title-secondary")}>{`${
            projectCategorySelected.charAt(0).toUpperCase() +
            projectCategorySelected.slice(1)
          } Roofing Projects`}</h2>
        </div>
        <div className={cx("projects-gallery__gallery")}>
          {currentProjectData.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </section>
    )
  );
};

export default ProjectsGallery;
