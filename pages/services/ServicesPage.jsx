import ServicesDetailsSection from "../../components/ServicesPageComponents/ServicesDetailsSection/ServicesDetailsSection";
import { useServicesContext } from "../../context/services";

import styles from "./ServicesPage.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const ServicesPage = () => {
    const currentService = useServicesContext();
    console.log(currentService);
    return (
        <div className={cx("services-page")}>
            <ServicesDetailsSection currentService={currentService}/>
        </div>
    )
};

export default ServicesPage;