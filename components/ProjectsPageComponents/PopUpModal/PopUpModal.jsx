import { Modal, Box } from "@mui/material/";

import styles from "./PopUpModal.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
};

const PopUpModal = ({ modalOpened, setModalOpened, imageURL }) => {
  return (
    <Modal
      className={cx("pop-up-modal")}
      open={modalOpened}
      onClose={() => setModalOpened(false)}
      style={{ border: "none", outline: "none" }}
    >
      <Box className={cx("pop-up-modal__container")} style={style}>
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
