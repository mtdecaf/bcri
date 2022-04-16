import { useState, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import styles from "./PageNav.module.scss";

const PageNav = () => {
  const hasWindow = typeof window !== "undefined";

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mounted, setMounted] = useState(false);
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
  console.log(windowWidth);
  return mounted && windowWidth >= 768 ? (
    <div className={[styles["page-nav"], styles["page-nav--large"]].join(" ")}>
      <ul className={styles["page-nav__list"]}>
        <li className={[styles["page-nav__button"], styles["page-nav__service"]].join(" ")}>service</li>
        <li className={[styles["page-nav__button"], styles["page-nav__testimonial"]].join(" ")}>Testimonial</li>
        <li className={[styles["page-nav__button"], styles["page-nav__company"]].join(" ")}>Company</li>
        <li className={[styles["page-nav__button"], styles["page-nav__contact"]].join(" ")}>Contact Us</li>
      </ul>
    </div>
  ) : mounted ? (
    <div className={[styles["page-nav"], styles["page-nav--small"]].join(" ")}>
      <MenuRoundedIcon fontSize="large" className={styles["page-nav__burger"]} />
    </div>
  ) : null;
};

export default PageNav;
