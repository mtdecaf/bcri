import { useState, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import styles from "./PageNav.module.scss";
import Image from 'next/image';
import bcriLogo from '../../public/bcri-logo.png';
import { FiPhone } from "react-icons/fi";
import BurgerMenu from "./components/BurgerMenu";

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
  return mounted && windowWidth >= 768 ? (
    <div className={[styles["page-nav"], styles["page-nav--large"]].join(" ")}>
      <div className={styles["page-nav__contact-bar--large"]}>
        <div className={styles["page-nav__contact-bar__wrap"]}>
          <div className={styles["page-nav__logo-wrap"]}>
            <Image className={styles["page-nav__logo"]} width="100%" height="40%" objectFit="contain" src={bcriLogo} alt="BCRI logo" />
          </div>
          <div className={styles["page-nav__contact-bar-info"]}>
            <div className={styles["page-nav__contact-phone__wrap"]}>
              <FiPhone className={styles["page-nav__contact-phone-icon"]} />
              <p className={styles["page-nav__contact-phone"]}><a href="tel:+16045392510">(604)-539-2510</a></p>
            </div>
            <div className={styles["page-nav__contact-email__wrap"]}>
              <EmailOutlinedIcon className={styles["page-nav__contact-email-icon"]} />
              <p className={styles["page-nav__contact-email"]}><a href="mailto:info@bcroofinspections.com">info@bcroofinspections.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["page-nav__list-wrap"]}>
        <div className={styles["page-nav__list"]}>
          <a className={[styles["page-nav__button"], styles["page-nav__service"]].join(" ")} href="">SERVICE</a>
          <a className={[styles["page-nav__button"], styles["page-nav__testimonial"]].join(" ")} href="">TESTIMONIALS</a>
          <a className={[styles["page-nav__button"], styles["page-nav__company"]].join(" ")} href="">COMPANY</a>
          <a className={[styles["page-nav__button"], styles["page-nav__contact"]].join(" ")} href="">CONTACT US</a>
        </div>
      </div>
    </div>
  ) : mounted ? (
    <>
    <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    {windowWidth <= 425 ? 
    <div className={styles["page-nav__contact-bar"]}>
      <div className={styles["page-nav__contact-phone__wrap--small"]}>
        <FiPhone className={styles["page-nav__contact-phone-icon"]} />
        <p className={styles["page-nav__contact-phone"]}><a href="tel:+16045392510">(604)-539-2510</a></p>
      </div>
    </div> : null}
    <div className={[styles["page-nav"], styles["page-nav--small"]].join(" ")}>
      <div className={styles["page-nav__logo-wrap"]}>
        <Image className={styles["page-nav__logo"]} width="100%" height="40%" objectFit="contain" src={bcriLogo} alt="BCRI logo" />
      </div>
      <div className={styles["page-nav__right-wrap"]}>
        {windowWidth > 425 ?
        <div className={styles["page-nav__contact-phone__wrap"]}>
          <FiPhone className={styles["page-nav__contact-phone-icon"]} />
          <p className={styles["page-nav__contact-phone"]}><a href="tel:+16045392510">(604)-539-2510</a></p>
        </div> : null}
        <MenuRoundedIcon className={styles["page-nav__burger"]} fontSize="large" onClick={() => handleClick()} />
      </div>
    </div>
    </>
  ) : null;
};

export default PageNav;
