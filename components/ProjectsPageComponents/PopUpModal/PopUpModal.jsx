import { Modal, Box } from "@mui/material/";
import { useState, useRef, useEffect } from "react";

import styles from "./PopUpModal.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PopUpModal = ({ modalOpened, setModalOpened, imageURL, imageRef }) => {
  const containerRef = useRef();
  const [startingTop, setStartingTop] = useState("50%");
  const [startingLeft, setStartingLeft] = useState("50%");

  useEffect(() => {
    setStartingTop(`${imageRef.current.getBoundingClientRect().top}px`);
    setStartingLeft(`${imageRef.current.getBoundingClientRect().left}px`);
  }, [modalOpened]);
  const style = {
    position: "absolute",
    top: startingTop,
    left: startingLeft,
    // transform: "translate(-50%, -50%)",
    border: "none",
    outline: "none",
  };

  return (
    <Modal
      className={cx("pop-up-modal")}
      open={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <Box
        className={cx("pop-up-modal__container")}
        ref={containerRef}
        style={style}
      >
        <img
          className={cx("pop-up-modal__container-img")}
          src={imageURL}
          alt=""
        />
      </Box>
    </Modal>
  );
};

export default PopUpModal;
