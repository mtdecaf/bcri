import { Modal } from "@mui/material/";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import styles from "./PopUpModal.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ModalImage = ({
  modalOpened,
  startingDimensions,
  windowHeight,
  windowWidth,
  imageRef,
}) => {
  const slideToCenter = useTransition(modalOpened, {
    from: {
      x: startingDimensions.top,
      y: startingDimensions.left,
    },
    enter: {
      x: windowHeight / 2 - imageRef.current.offsetHeight / 2,
      y: windowWidth / 2 - imageRef.current.offsetWidth / 2,
    },
  });
  return slideToCenter(
    (styles, item) =>
      item && (
        <animated.img
          className={cx("pop-up-modal__img")}
          src={imageURL}
          alt=""
          style={styles}
        />
      )
  );
};

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
  const [initDistFromCenter, setInitDistFromCenter] = useState({});

  useEffect(() => {
    setStartingDimensions({
      top: `${imageRef.current.getBoundingClientRect().top}px`,
      left: `${imageRef.current.getBoundingClientRect().left}px`,
    });
    modalOpened &&
      setInitDistFromCenter({
        top:
          windowHeight / 2 -
          imageRef.current.offsetHeight / 2 -
          startingDimensions.top.replace(/\D/g, ""),
        left:
          windowWidth / 2 -
          imageRef.current.offsetWidth / 2 -
          startingDimensions.top.replace(/\D/g, ""),
      });
  }, [modalOpened]);
  const style = {
    top: startingDimensions.top,
    left: startingDimensions.left,
  };

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
