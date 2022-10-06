import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

import styles from "./FooterSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const FooterSection = () => {
  return (
    <section className={cx("footer-section")} id="footer-section">
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
              At BC Roof Inspections we provide affordable Residential,
              Commercial and Strata Roof Inspections in British Columbia.
            </p>
          </div>
        </div>
        <div className={cx("footer-section__partners-wrap")}>
          <img
            className={cx("footer-section__partners")}
            src="/partners/partner1.png"
            alt="Better Business Bureau"
          />
          <img
            className={cx("footer-section__partners")}
            src="/partners/partner2.png"
            alt="International Institute of Building Enclosure Consultant"
          />
          <img
            className={cx("footer-section__partners")}
            src="/partners/partner3.png"
            alt="Roof Contractors Association of British Columbia"
          />
        </div>
        <div
          className={cx(
            "footer-section__contact-wrap",
            "footer-section__contact-content-wrap"
          )}
        >
          <h3
            className={cx(
              "footer-section__contact-title",
              "footer-section__title"
            )}
          >
            Contact Us
          </h3>
          <div
            className={cx(
              "footer-section__contact-phone-wrap",
              "footer-section__contact-content-wrap"
            )}
          >
            <a
              className={cx(
                "footer-section__contact-phone-link",
                "footer-section__contact-content-wrap"
              )}
              href="tel:+16045392510"
            >
              (604)-539-2510
            </a>
          </div>
          <div
            className={cx(
              "footer-section__contact-email-wrap",
              "footer-section__contact-content-wrap"
            )}
          >
            <a
              className={cx("footer-section__contact-email-link")}
              href="mailto: info@bcroofinspections.com"
            >
              info@bcroofinspections.com
            </a>
          </div>
          <div
            className={cx(
              "footer-section__contact-socials-wrap",
              "footer-section__contact-content-wrap"
            )}
          >
            <a className={cx("footer-section__contact-socials-link")} href="">
              <BsLinkedin size={32} />
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
    </section>
  );
};

export default FooterSection;
