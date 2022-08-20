import { useState, useRef } from "react";
import { ImPlus } from "react-icons/im";
import PopUpModal from "../PopUpModal/PopUpModal";

import Image from "next/image";

import styles from "./ProjectCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectCard = ({ project, windowWidth, windowHeight }) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const imageRef = useRef();

  const imageURL = "https://via.placeholder.com/240";

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
          onClick={() => {
            setModalOpened(true);
            setHovered(false);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={hovered ? { opacity: "0.75" } : { opacity: "0" }}
        ></span>
        <ImPlus
          className={cx("project-card__image-overlay-plus")}
          size={28}
          color={"FFF"}
          style={hovered ? { opacity: "0.75" } : { opacity: "0" }}
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
      {imageRef.current && (
        <PopUpModal
          imageSrc={imageURL}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          imageURL={imageURL}
          imageRef={imageRef}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      )}
    </div>
  );
};

export default ProjectCard;
