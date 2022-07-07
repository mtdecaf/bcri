import { useServicesContext } from "../../../../context/services";

import { Slide } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Link from "next/link";

import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  const { handleServiceSelected } = useServicesContext();
  const clickService = () => {
    handleServiceSelected();
    setIsOpen(false);
  };

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div className={cx("burger-menu")}>
        <ClearRoundedIcon
          className={cx("burger-menu__close")}
          style={{ fontSize: 50 }}
          onClick={() => setIsOpen(false)}
        />
        <div className={cx("burger-menu__list")}>
          <Link href="/">
            <a className={cx("burger-menu__button", "burger-menu__home")}>HOME</a>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <Link href="/services">
            <a
              className={cx("burger-menu__button")}
              onClick={() => clickService()}
            >
              SERVICES
            </a>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <Link href="/about">
            <a
              className={cx("burger-menu__button")}
            >
              ABOUT US
            </a>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <Link href="/projects">
          <a className={cx("burger-menu__button")} href="">
            PROJECTS
          </a>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <Link href="/projects">
            <a className={cx("burger-menu__button")} href="">
              CONTACT US
            </a>
          </Link>
        </div>
      </div>
    </Slide>
  );
};

export default BurgerMenu;
