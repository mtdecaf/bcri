import styles from "./ServicesDetailsSection.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const ServicesDetailsSection = () => {
    return (
        <div className={cx("services-details")}>
            <div className={cx("services-details__title-wrap")}>
                <h2 className={cx("services-details__title")}>Our Services</h2>
            </div>
        </div>
    )
}

export default ServicesDetailsSection;