import { useState } from "react";
import { useSpring, useTransition, animated } from "react-spring";
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

  const servicesAccordionTransition = useTransition(servicesDropDownOpen, {
    from: {
      height: "0%",
    },
    enter: {
      height: "40%",
    },
    leave: {
      height: "0%",
    },
    config: { duration: 500 },
  });

  const projectsAccordionTransition = useTransition(projectsDropDownOpen, {
    from: {
      height: "0%",
    },
    enter: {
      height: "40%",
    },
    leave: {
      height: "0%",
    },
    config: { duration: 500 },
  });

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div className={cx("burger-menu")}>
        <ClearRoundedIcon
          className={cx("burger-menu__close")}
          style={{ fontSize: 32 }}
          onClick={() => setIsOpen(false)}
          color={"#2a3959"}
        />
        <div className={cx("burger-menu__list")}>
          <Link href="/" passHref>
            <p
              className={cx("burger-menu__button", "burger-menu__home")}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </p>
          </Link>
          <hr className={cx("burger-menu__divider")} />
          <div className={cx("burger-menu__services-wrap")}>
            <Link href="/services" passHref>
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
              onClick={() => {
                setServicesDropDownOpen(!servicesDropDownOpen);
                setProjectsDropDownOpen(false);
              }}
              color={"#2a3959"}
              style={servicesDropDownOpen && { transform: "rotate(180deg)" }}
            />
          </div>
          {servicesAccordionTransition(
            (styles, item) =>
              item && (
                <animated.div
                  className={cx(
                    "burger-menu__services-drop-down",
                    "burger-menu__options-drop-down"
                  )}
                  style={styles}
                >
                  {servicesTitle.map((service, key) => {
                    return (
                      <Link
                        href={`/services/${service
                          .replace(/\s/g, "")
                          .toLowerCase()}`}
                        key={key}
                        passHref
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
                </animated.div>
              )
          )}
          <hr className={cx("burger-menu__divider")} />
          <div className={cx("burger-menu__projects-wrap")}>
            <p
              className={cx("burger-menu__button")}
              onClick={() => {
                setProjectsDropDownOpen(!projectsDropDownOpen);
                setServicesDropDownOpen(false);
              }}
            >
              PROJECTS
            </p>
            <BiChevronDown
              className={cx("burger-menu__down-icon")}
              size={24}
              onClick={() => {
                setProjectsDropDownOpen(!projectsDropDownOpen);
                setServicesDropDownOpen(false);
              }}
              color={"#2a3959"}
              style={projectsDropDownOpen && { transform: "rotate(180deg)" }}
            />
          </div>
          {projectsAccordionTransition(
            (styles, item) =>
              item && (
                <animated.div
                  className={cx(
                    "burger-menu__projects-drop-down",
                    "burger-menu__options-drop-down"
                  )}
                  style={styles}
                >
                  {projectCat.map((project, key) => {
                    return (
                      <Link
                        href={`/projects/${project.toLowerCase()}`}
                        key={key}
                        passHref
                      >
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
                </animated.div>
              )
          )}

          <hr className={cx("burger-menu__divider")} />
          <Link href="/projects" passHref>
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
