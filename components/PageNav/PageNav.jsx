import { useState, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from 'next/image';
import bcriLogo from '../../public/bcri-logo.png';
import { FiPhone } from "react-icons/fi";
import BurgerMenu from "./components/BurgerMenu";

import styles from "./PageNav.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const PageNav = () => {
  const hasWindow = typeof window !== "undefined";

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return mounted && windowWidth >= 768 ? (
    <div className = {cx("page-nav", "page-nav--large")}>
      <div className={cx("page-nav__contact-bar--large")}>
        <div className={cx("page-nav__contact-bar__wrap")}>
          <div className={cx("page-nav__logo-wrap")}>
            <Image className={cx("page-nav__logo")} width="100%" height="40%" objectFit="contain" src={bcriLogo} alt="BCRI logo" />
          </div>
          <div className={cx("page-nav__contact-bar-info")}>
            <div className={cx("page-nav__contact-phone__wrap")}>
              <FiPhone className={cx("page-nav__contact-phone-icon")} />
              <p className={cx("page-nav__contact-phone")}><a href="tel:+16045392510">(604)-539-2510</a></p>
            </div>
            <div className={cx("page-nav__contact-email__wrap")}>
              <EmailOutlinedIcon className={cx("page-nav__contact-email-icon")} />
              <p className={cx("page-nav__contact-email")}><a href="mailto:info@bcroofinspections.com">info@bcroofinspections.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("page-nav__list-wrap")}>
        <div className={cx("page-nav__list")}>
          <a className={cx("page-nav__button", "page-nav__service")} href="" onClick={(e) => scrollTo(e, "services-section")}>SERVICE</a>
          <a className={cx("page-nav__button", "page-nav__testimonial")} href="" onClick={(e) => scrollTo(e, "testimonial-section")}>TESTIMONIALS</a>
          <a className={cx("page-nav__button", "page-nav__company")} href="">COMPANY</a>
          <a className={cx("page-nav__button", "page-nav__contact")} href="">CONTACT US</a>
        </div>
      </div>
    </div>
  ) : mounted ? (
    <>
    <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} scrollTo={scrollTo} />
    {windowWidth <= 425 ? 
    <div className={cx("page-nav__contact-bar")}>
      <div className={cx("page-nav__contact-phone__wrap--small")}>
        <FiPhone className={cx("page-nav__contact-phone-icon")} />
        <p className={cx("page-nav__contact-phone")}><a href="tel:+16045392510">(604)-539-2510</a></p>
      </div>
    </div> : null}
    <div className={cx("page-nav", "page-nav--small")}>
      <div className={cx("page-nav__logo-wrap")}>
        <Image className={cx("page-nav__logo")} width="100%" height="40%" objectFit="contain" src={bcriLogo} alt="BCRI logo" />
      </div>
      <div className={cx("page-nav__right-wrap")}>
        {windowWidth > 425 ?
        <div className={cx("page-nav__contact-phone__wrap")}>
          <FiPhone className={cx("page-nav__contact-phone-icon")} />
          <p className={cx("page-nav__contact-phone")}><a href="tel:+16045392510">(604)-539-2510</a></p>
        </div> : null}
        <MenuRoundedIcon className={cx("page-nav__burger")} fontSize="large" onClick={() => handleClick()} />
      </div>
    </div>
    </>
  ) : null;
};

export default PageNav;
