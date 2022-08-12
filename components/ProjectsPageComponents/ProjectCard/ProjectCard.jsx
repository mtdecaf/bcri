import { useState, useEffect, useRef } from "react";
import { ImPlus } from "react-icons/im";
import PopUpModal from "../PopUpModal/PopUpModal";

import Image from "next/image";

import styles from "./ProjectCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectCard = ({ project }) => {
  const [hoverd, setHovered] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const imageRef = useRef();

  const imageURL = "https://via.placeholder.com/240";
  // useEffect(() => {
  //   console.log(imageRef);
  // }, []);
  return (
    <div className={cx("project-card")}>
      <div className={cx("project-card__image-wrap")} ref={imageRef}>
        <img
          className={cx("project-card__image")}
          src={imageURL}
          alt="project image"
        />
        <span
          className={cx("project-card__image-overlay")}
          onClick={() => setModalOpened(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={hoverd ? { opacity: "0.75" } : { opacity: "0" }}
        ></span>
        <ImPlus
          className={cx("project-card__image-overlay-plus")}
          size={28}
          color={"FFF"}
          style={hoverd ? { opacity: "0.75" } : { opacity: "0" }}
        />
        <PopUpModal
          imageSrc={"https://via.placeholder.com/240"}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          imageURL={imageURL}
        />
      </div>
      <div className={cx("project-card__content-wrap")}>
        {project?.name && (
          <h3 className={cx("project-card__content-title")}>{project.name}</h3>
        )}
        <p className={cx("project-card__content-desc")}>
          {project?.name ? project.address : project}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
