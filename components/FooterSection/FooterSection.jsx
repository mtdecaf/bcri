import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import { BsLinkedin } from "react-icons/bs";

import services from "../../data/servicesData.json";

import styles from "./FooterSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const FooterSection = () => {
  const { servicesData } = services;
  return (
    <div className={cx("footer-section")} id="footer-section">
      <div className={cx("footer-section__inner-wrap")}>
        <div className={cx("footer-section__about-wrap")}>
          <h3
            className={cx(
              "footer-section__about-title",
              "footer-section__title"
            )}
          >
            About Us
          </h3>
          <div className={cx("footer-section__about-content-wrap")}>
            <p className={cx("footer-section__about-content")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget nisl id libero consectetur fermentum. Nulla euismod, urna eu
              tempor consectetur, nisi nisl aliquam nunc, euismod aliquam nisl
              nisi euismod.
            </p>
          </div>
        </div>
        <div className={cx("footer-section__services-wrap")}>
          <h3
            className={cx(
              "footer-section__services-title",
              "footer-section__title"
            )}
          >
            Services
          </h3>
          <ul className={cx("footer-section__services-list")}>
            {servicesData.map((data, key) => (
              <li
                className={cx("footer-section__services-list-item")}
                key={key}
              >
                <Link href="/services">
                  <a className={cx("footer-section__services-list-item-link")}>
                    {data.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx("footer-section__contact-wrap")}>
          <h3
            className={cx(
              "footer-section__contact-title",
              "footer-section__title"
            )}
          >
            Contact Us
          </h3>
          <div className={cx("footer-section__contact-phone-wrap")}>
            <a
              className={cx("footer-section__contact-phone-link")}
              href="tel:+16045392510"
            >
              Phone: (604)-539-2510
            </a>
          </div>
          <div className={cx("footer-section__contact-email-wrap")}>
            <a
              className={cx("footer-section__contact-email-link")}
              href="mailto: info@bcroofinspections.com"
            >
              Email: info@bcroofinspections.com
            </a>
          </div>
          <div className={cx("footer-section__contact-socials-wrap")}>
            <a className={cx("footer-section__contact-socials-link")} href="">
              <BsLinkedin size={32}/>
            </a>
          </div>
        </div>
        <ScrollAnimation
          animateIn="zoomIn"
          animateOnce
          animatePreScroll={false}
          className={cx("footer-section__overlay-wrap")}
        >
          <div className={cx("footer-section__overlay-title-wrap")}>
            <h3 className={cx("footer-section__overlay-title")}>
              Ready to get Started?
            </h3>
            <h3 className={cx("footer-section__overlay-title")}>
              Get in touch today
            </h3>
          </div>
          <a
            className={cx("footer-section__overlay-button")}
            href="mailto: info@bcroofinspections.com"
          >
            REQUEST A QUOTE
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default FooterSection;
