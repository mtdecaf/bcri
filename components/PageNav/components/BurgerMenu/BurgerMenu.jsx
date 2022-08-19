import { useState } from "react";
import { Slide } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Link from "next/link";

import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const BurgerMenu = ({ isOpen, setIsOpen, servicesTitle, projectCat }) => {
  const [projectsDropDownOpen, setProjectsDropDownOpen] = useState(false);
  const [servicesDropDownOpen, setServicesDropDownOpen] = useState(false);

  const handleAccordionToggle = (item) => {
    if (item === "projects") {
      projectsDropDownOpen
        ? setTimeout(() => setProjectsDropDownOpen(false), 1000)
        : setProjectsDropDownOpen(true);
    }
    if (item === "services") {
      servicesDropDownOpen
        ? setTimeout(() => setServicesDropDownOpen(false), 1000)
        : setServicesDropDownOpen(true);
    }
  };

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div className={cx("burger-menu")}>
        <ClearRoundedIcon
          className={cx("burger-menu__close")}
          style={{ fontSize: 32 }}
          onClick={() => setIsOpen(false)}
        />
        <div className={cx("burger-menu__list")}>
          <Link href="/">
            <p
              className={cx("burger-menu__button", "burger-menu__home")}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </p>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <div className={cx("burger-menu__services-wrap")}>
            <Link href="/services">
              <p
                className={cx("burger-menu__button")}
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </p>
            </Link>
            <BiChevronDown
              className={cx("burger-menu__down-icon")}
              size={24}
              onClick={() => handleAccordionToggle("services")}
            />
          </div>
          {servicesDropDownOpen && (
            <div
              className={cx(
                "burger-menu__services-drop-down",
                "burger-menu__options-drop-down"
              )}
            >
              {servicesTitle.map((service, key) => {
                return (
                  <Link
                    href={`/services/${service
                      .replace(/\s/g, "")
                      .toLowerCase()}`}
                    key={key}
                  >
                    <p
                      className={cx(
                        "burger-menu__services-drop-down-text",
                        "burger-menu__item-drop-down-text"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {service}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
          <hr className={cx("burger-menu__divider")} />
          <Link href="/about">
            <p
              className={cx("burger-menu__button")}
              onClick={() => setIsOpen(false)}
            >
              ABOUT US
            </p>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <div className={cx("burger-menu__projects-wrap")}>
            <p
              className={cx("burger-menu__button")}
              onClick={() => handleAccordionToggle("projects")}
            >
              PROJECTS
            </p>
            <BiChevronDown
              className={cx("burger-menu__down-icon")}
              size={24}
              onClick={() => handleAccordionToggle("projects")}
            />
          </div>
          {projectsDropDownOpen && (
            <div
              className={cx(
                "burger-menu__projects-drop-down",
                "burger-menu__options-drop-down"
              )}
            >
              {projectCat.map((project, key) => {
                return (
                  <Link href={`/projects/${project.toLowerCase()}`} key={key}>
                    <p
                      className={cx(
                        "burger-menu__projects-drop-down-text",
                        "burger-menu__item-drop-down-text"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {project}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}

          <hr className={cx("burger-menu__divider")} />
          <Link href="/projects">
            <p
              className={cx("burger-menu__button")}
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </p>
          </Link>
        </div>
      </div>
    </Slide>
  );
};

export default BurgerMenu;
