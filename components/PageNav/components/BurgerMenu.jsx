import { Slide } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import styles from "./BurgerMenu.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div className={cx("burger-menu")}>
        <ClearRoundedIcon className={cx("burger-menu__close")} style={{ fontSize: 50 }} onClick={() => setIsOpen(false)} />
        <div className={cx("burger-menu__list")}>
            <a className={cx("burger-menu__button")} href="">SERVICE</a>
            <hr className={cx("burger-menu__divider")}/>
            <a className={cx("burger-menu__button")} href="">TESTIMONIALS</a>
            <hr className={cx("burger-menu__divider")}/>
            <a className={cx("burger-menu__button")} href="">COMPANY</a>
            <hr className={cx("burger-menu__divider")}/>
            <a className={cx("burger-menu__button")} href="">CONTACT US</a>
        </div>
      </div>
    </Slide>
  );
};

export default BurgerMenu;
