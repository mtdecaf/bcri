import ServicesSection from "../../components/ServicesSection/ServicesSection";

import styles from "./ServicesPage.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const ServicesPage = () => {
    return (
        <div className={cx("services-page")}>
            <ServicesSection />
        </div>
    )
};

export default ServicesPage;