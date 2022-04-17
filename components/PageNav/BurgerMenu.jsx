import { Slide } from "@mui/material";
import styles from "./PageNav.module.scss";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div className={styles["burger-menu"]}>
        <a className={styles["burger-menu__button"]} href="">
          Service
        </a>
        <a className={styles["burger-menu__button"]} href="">
          Testimonial
        </a>
        <a className={styles["burger-menu__button"]} href="">
          Company
        </a>
        <a className={styles["burger-menu__button"]} href="">
          Contact Us
        </a>
      </div>
    </Slide>
  );
};

export default BurgerMenu;
