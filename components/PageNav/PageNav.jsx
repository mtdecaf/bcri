import { useState, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from 'next/image';
import Link from 'next/link';
import bcriLogo from '../../public/bcri-logo.png';
import { FiPhone } from "react-icons/fi";

import BurgerMenu from "./components/BurgerMenu";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

import styles from "./PageNav.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const PageNav = () => {
  const hasWindow = typeof window !== "undefined";

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState();
  
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

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasWindow]);

  // large nav transition styles
  const navBarStyle = {
    padding: isScrolled && "1.5rem 0",
    maxHeight: isScrolled ? "7rem" : "4rem",
    transition: "all 0.75s",
  }

  const navBarLogoStyle = {
    maxWidth: isScrolled ? "7.5rem" : "7rem",
    transition: "all 0.75s",
  }

  const navBarPhoneWrapStyle = {
    padding: isScrolled ? "0.6rem 1rem" : "0.3rem 0.75rem",
    transition: "padding 0.75s",
  }

  const navBarfontStyle = {
    fontSize: isScrolled ? "1.2rem" : "1rem",
    transition: "font-size 0.75s",
  }

  const navListStyle = {
    maxHeight: isScrolled ? "0" : "3rem",
    transition: "max-height 0.75s",
  };

  return mounted && windowWidth >= 768 ? (
    <div className = {cx("page-nav", "page-nav--large")}>
      <div className={cx("page-nav__contact-bar--large")} style={navBarStyle}>
        <div className={cx("page-nav__contact-bar__wrap")}>
          <div className={cx("page-nav__logo-wrap")} style={navBarLogoStyle}>
            <Link href="/"><a><Image className={cx("page-nav__logo")} layout="responsive" src={bcriLogo} alt="BCRI logo" /></a></Link>
          </div>
          <div className={cx("page-nav__contact-bar-info")}>
            <div className={cx("page-nav__contact-phone__wrap")} style={navBarPhoneWrapStyle}>
              <FiPhone className={cx("page-nav__contact-phone-icon")} />
              <a href="tel:+16045392510" className={cx("page-nav__contact-phone")} style={navBarfontStyle}>(604)-539-2510</a>
            </div>
            <div className={cx("page-nav__contact-email__wrap")}>
              <EmailOutlinedIcon className={cx("page-nav__contact-email-icon")} />
              <a href="mailto:info@bcroofinspections.com" className={cx("page-nav__contact-email")} style={navBarfontStyle}>info@bcroofinspections.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("page-nav__list-wrap")} style={navListStyle}>
        <div className={cx("page-nav__list")}>
          <Link href="/services"><a className={cx("page-nav__button", "page-nav__services")}>SERVICES</a></Link>
          <a className={cx("page-nav__button", "page-nav__testimonial")} onClick={(e) => scrollTo(e, "testimonial-section")}>TESTIMONIALS</a>
          <a className={cx("page-nav__button", "page-nav__company")}>COMPANY</a>
          <a className={cx("page-nav__button", "page-nav__contact")} onClick={(e) => scrollTo(e, "footer-section")}>CONTACT US</a>
        </div>
      </div>
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  ) : mounted ? (
    <>
    <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} scrollTo={scrollTo} />
    <div className={cx("page-nav", "page-nav--small")}>
      <div className={cx("page-nav__logo-wrap")} style={{width:"6rem"}}>
        <Image className={cx("page-nav__logo")} layout="responsive" src={bcriLogo} alt="BCRI logo" />
      </div>
      <div className={cx("page-nav__right-wrap")}>
        <div className={cx("page-nav__contact-phone__wrap")}>
          <FiPhone className={cx("page-nav__contact-phone-icon")} />
          <a href="tel:+16045392510" className={cx("page-nav__contact-phone")}>(604)-539-2510</a>
        </div>
        <MenuRoundedIcon className={cx("page-nav__burger")} fontSize="large" onClick={() => handleClick()} />
      </div>
      <ScrollToTopButton />
    </div>
    </>
  ) : null;
};

export default PageNav;
