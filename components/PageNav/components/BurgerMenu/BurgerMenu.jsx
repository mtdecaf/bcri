import { useState } from "react";
import { useTransition, animated } from "react-spring";
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
      height: "100%",
    },
    leave: {
      height: "0%",
    },
    config: { duration: 1000 },
  });
  const projectsAccordionTransition = useTransition(projectsDropDownOpen, {
    from: {
      height: "0%",
    },
    enter: {
      height: "100%",
    },
    leave: {
      height: "0%",
    },
    config: { duration: 1000 },
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
              onClick={() => {
                setServicesDropDownOpen(!servicesDropDownOpen);
                setProjectsDropDownOpen(false);
              }}
              color={"#2a3959"}
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
