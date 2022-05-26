import styles from "./FooterSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const FooterSection = () => {
  return (
    <div className={cx("footer-section")}>
      <div className={cx("footer-section__inner-wrap")}>
        <div className={cx("footer-section__about-wrap")}>
          <h3 className={cx("footer-section__about-title")}>About Us</h3>
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
          <h3 className={cx("footer-section__services-title")}>Services</h3>
          <ul classNames={cx("footer-section__services-list")}>
            <li className={cx("footer-section__services-list-item")}>
              <a
                className={cx("footer-section__services-list-item-link")}
                href="#"
              ></a>
            </li>
            <li className={cx("footer-section__services-list-item")}>
              <a
                className={cx("footer-section__services-list-item-link")}
                href="#"
              ></a>
            </li>
            <li className={cx("footer-section__services-list-item")}>
              <a
                className={cx("footer-section__services-list-item-link")}
                href="#"
              ></a>
            </li>
          </ul>
        </div>
        <div className={cx("footer-section__contact-wrap")}>
          <h3 className={cx("footer-section__contact-title")}>Contact Us</h3>
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
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
