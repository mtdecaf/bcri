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
            <a className={styles["burger-menu__button"]} href="">Testimonial</a>
            <a className={styles["burger-menu__button"]} href="">Company</a>
            <a className={styles["burger-menu__button"]} href="">Contact Us</a>
        </div>
      </div>
    </Slide>
  );
};

export default BurgerMenu;
