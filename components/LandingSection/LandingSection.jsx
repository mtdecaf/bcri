import styles from "./LandingSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const LandingSection = () => {
    return (
        <div className={cx("landing-section")} id="landing-section">
            <h1 className={cx("landing-section__title")}>The <br></br> Roof <br></br> Inspections <br></br> You Can Count On</h1>
            <div className={cx("landing-section__button-wrap")}>
                <button className={cx("landing-section__button", "landing-section__button--primary", "landing-section__button-contact")} href="">CONTACT US</button>
                <button className={cx("landing-section__button", "landing-section__button--sub", "landing-section__button-service")} href="">OUR SERVICES</button>
            </div>
        </div>
    )
}

export default LandingSection;