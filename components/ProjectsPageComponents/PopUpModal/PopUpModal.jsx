import { Modal } from "@mui/material/";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import styles from "./PopUpModal.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PopUpModal = ({
  modalOpened,
  setModalOpened,
  imageURL,
  imageRef,
  windowWidth,
  windowHeight,
}) => {
  const [startingDimensions, setStartingDimensions] = useState({
    top: "50%",
    left: "50%",
  });

  useEffect(() => {
    setStartingDimensions({
      top: `${imageRef.current.getBoundingClientRect().top}px`,
      left: `${imageRef.current.getBoundingClientRect().left}px`,
    });
  }, [modalOpened]);

  const slideToCenter = useTransition(modalOpened, {
    from: {
      width: "240px",
      top: startingDimensions.top,
      left: startingDimensions.left,
    },
    enter: {
      width: "480px",
      top: `${windowHeight / 2 - imageRef.current.offsetHeight}px`,
      left: `${windowWidth / 2 - imageRef.current.offsetWidth}px`,
    },
  });

  return (
    <Modal
      className={cx("pop-up-modal")}
      open={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      {slideToCenter(
        (style, item) =>
          item && (
            <animated.img
              className={cx("pop-up-modal__img")}
              src={imageURL}
              alt=""
              style={style}
            />
          )
      )}
    </Modal>
  );
};

export default PopUpModal;
