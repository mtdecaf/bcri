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
  const [startingDimensions, setStartingDimensions] = useState({});
  const [startingDimensionsReady, setStartingDimensionsReady] = useState(false);
  useEffect(() => {
    modalOpened
      ? setStartingDimensions({
          top: `${imageRef.current.getBoundingClientRect().top}px`,
          left: `${imageRef.current.getBoundingClientRect().left}px`,
        })
      : setStartingDimensions({});
    !modalOpened && setStartingDimensionsReady(false);
  }, [modalOpened]);
  useEffect(() => {
    // if starting dimensions changed
    if (startingDimensions.top && startingDimensions.left) {
      setStartingDimensionsReady(true);
    }
  }, [startingDimensions]);

  const slideToCenter = useTransition(startingDimensionsReady, {
    from: {
      width: "240px",
      top: startingDimensions.top,
      left: startingDimensions.left,
    },
    enter: {
      width: windowWidth < 500 ? "240px" : "480px",
      top:  windowWidth < 500 ? `${windowHeight / 2 - imageRef.current.offsetHeight / 2}px` :  `${windowHeight / 2 - imageRef.current.offsetHeight}px`,
      left: windowWidth < 500 ? `${windowWidth / 2 - imageRef.current.offsetWidth / 2}px` : `${windowWidth / 2 - imageRef.current.offsetWidth}px`,
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
