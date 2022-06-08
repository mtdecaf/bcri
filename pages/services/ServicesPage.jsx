import ServicesDetailsSection from "../../components/ServicesPageComponents/ServicesDetailsSection/ServicesDetailsSection";
import { useServicesContext } from "../../context/services";
import services from "../../data/servicesData.json";

import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesPage = () => {
  const currentService = useServicesContext();
  const { servicesData } = services;
  return (
    <div className={cx("services-page")}>
      <ServicesDetailsSection servicesData={servicesData} currentService={currentService} />
    </div>
  );
};

export default ServicesPage;
