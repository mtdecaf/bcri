import styles from "./LandingSection.module.scss";
import classNames from "classnames";
let cx = classNames.bind(styles);

const LandingSection = () => {
    return (
        <div className={cx("landing-section")}>
            <h1></h1>
        </div>
    )
}

export default LandingSection;