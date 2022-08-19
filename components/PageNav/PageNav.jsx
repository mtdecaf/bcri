import { useState, useEffect } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "next/image";
import Link from "next/link";
import bcriLogo from "../../public/bcri-logo.svg";
import { FiPhone } from "react-icons/fi";
import services from "../../data/servicesData.json";
import projects from "../../data/projectsData.json";

import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

import styles from "./PageNav.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PageNav = () => {
  const { servicesData } = services;
  const projectCat = Object.keys(projects);

  const hasWindow = typeof window !== "undefined";

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState();
  const [serviesDropDownOpen, setServiesDropDownOpen] = useState(false);
  const [projectsDropDownOpen, setProjectsDropDownOpen] = useState(false);

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

  const handleBurgerMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
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

  return mounted && windowWidth >= 768 ? (
    <div className={cx("page-nav", "page-nav--large")}>
      <div className={cx("page-nav__contact-bar--large")}>
        <div className={cx("page-nav__contact-bar__wrap")}>
          <Link href="/">
            <a className={cx("page-nav__logo-wrap")}>
              <Image
                className={cx("page-nav__logo")}
                src={bcriLogo}
                alt="BCRI logo"
                width={isScrolled ? 144 : 136}
                height={50}
              />
            </a>
          </Link>
          <div className={cx("page-nav__contact-bar-info")}>
            <div className={cx("page-nav__contact-phone__wrap")}>
              <FiPhone className={cx("page-nav__contact-phone-icon")} />
              <a
                href="tel:+16045392510"
                className={cx("page-nav__contact-phone")}
              >
                (604)-539-2510
              </a>
            </div>
            <div className={cx("page-nav__contact-email__wrap")}>
              <EmailOutlinedIcon
                className={cx("page-nav__contact-email-icon")}
              />
              <a
                href="mailto:info@bcroofinspections.com"
                className={cx("page-nav__contact-email")}
              >
                info@bcroofinspections.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("page-nav__list-wrap")}>
        <div className={cx("page-nav__list")}>
          <Link href="/">
            <a className={cx("page-nav__button", "page-nav__home")}>HOME</a>
          </Link>
          <div className={cx("page-nav__services-wrap", "page-nav__item-wrap")}>
            <Link href="/services">
              <a
                className={cx("page-nav__button", "page-nav__services")}
                onMouseEnter={() => setServiesDropDownOpen(true)}
                onMouseLeave={() => setServiesDropDownOpen(false)}
              >
                SERVICES
              </a>
            </Link>
            {serviesDropDownOpen && (
              <div
                className={cx(
                  "page-nav__services-drop-down",
                  "page-nav__item-drop-down"
                )}
                onMouseEnter={() => setServiesDropDownOpen(true)}
                onMouseLeave={() => setServiesDropDownOpen(false)}
              >
                {servicesData.map((service, key) => {
                  return (
                    <Link
                      href={`/services/${service.title
                        .replace(/\s/g, "")
                        .toLowerCase()}`}
                      key={key}
                    >
                      <p
                        className={cx(
                          "page-nav__services-drop-down-item",
                          "page-nav__item-drop-down-text"
                        )}
                        onClick={() => setServiesDropDownOpen(false)}
                      >
                        {service.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/about">
            <a className={cx("page-nav__button", "page-nav__about")}>
              ABOUT US
            </a>
          </Link>
          <div className={cx("page-nav__projects-wrap", "page-nav__item-wrap")}>
            <a
              className={cx("page-nav__button", "page-nav__projects")}
              onMouseEnter={() => setProjectsDropDownOpen(true)}
              onMouseLeave={() => setProjectsDropDownOpen(false)}
            >
              PROJECTS
            </a>
            {projectsDropDownOpen && (
              <div
                className={cx(
                  "page-nav__services-drop-down",
                  "page-nav__item-drop-down"
                )}
                onMouseEnter={() => setProjectsDropDownOpen(true)}
                onMouseLeave={() => setProjectsDropDownOpen(false)}
              >
                {projectCat.map((project, key) => {
                  return (
                    <Link href={`/projects/${project.toLowerCase()}`} key={key}>
                      <p
                        className={cx(
                          "page-nav__projects-drop-down-text",
                          "page-nav__item-drop-down-text"
                        )}
                        onClick={() => setProjectsDropDownOpen(false)}
                      >
                        {project}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <a
            className={cx("page-nav__button", "page-nav__contact")}
            onClick={(e) => scrollTo(e, "footer-section")}
          >
            CONTACT US
          </a>
        </div>
      </div>
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  ) : mounted ? (
    <>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} scrollTo={scrollTo} servicesTitle={servicesData.map(service => service.title)} projectCat={projectCat} />
      <div className={cx("page-nav", "page-nav--small")}>
        <div className={cx("page-nav__logo-wrap")} style={{ width: 96 }}>
          <Link href="/">
            <a>
              <Image
                className={cx("page-nav__logo")}
                src={bcriLogo}
                alt="BCRI logo"
                width={96}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div className={cx("page-nav__right-wrap")}>
          <div className={cx("page-nav__contact-phone__wrap")}>
            <FiPhone className={cx("page-nav__contact-phone-icon")} />
            <a
              href="tel:+16045392510"
              className={cx("page-nav__contact-phone")}
            >
              (604)-539-2510
            </a>
          </div>
          <MenuRoundedIcon
            className={cx("page-nav__burger")}
            fontSize="large"
            onClick={() => handleBurgerMenuClick()}
          />
        </div>
        <ScrollToTopButton isScrolled={isScrolled} />
      </div>
    </>
  ) : null;
};

export default PageNav;
