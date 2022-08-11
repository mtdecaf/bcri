import Image from "next/image";

import styles from "./ProjectCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className={cx("project-card")}>
      <div className={cx("project-card__image-wrap")}>
        <img
          className={cx("project-card__image")}
          src="https://via.placeholder.com/240"
          alt="project image"
        />
      </div>
      <div className={cx("project-card__content-wrap")}>
        {project?.name && <h3 className={cx("project-card__content-title")}>{project.name}</h3>}
        <p className={cx("project-card__content-desc")}>
          11600 Cottonwood Drive, Maple Ridge
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
