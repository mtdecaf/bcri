import { Slide } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div className={styles["burger-menu"]}>
        <ClearRoundedIcon className={styles["burger-menu__close"]} style={{ fontSize: 50 }} onClick={() => setIsOpen(false)} />
        <div className={styles["burger-menu__list"]}>
            <a className={styles["burger-menu__button"]} href="">Service</a>
            <hr className={styles["burger-menu__divider"]}/>
            <a className={styles["burger-menu__button"]} href="">Testimonial</a>
            <hr className={styles["burger-menu__divider"]}/>
            <a className={styles["burger-menu__button"]} href="">Company</a>
            <hr className={styles["burger-menu__divider"]}/>
            <a className={styles["burger-menu__button"]} href="">Contact Us</a>
        </div>
      </div>
    </Slide>
  );
};

export default BurgerMenu;
