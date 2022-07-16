import HeaderSection from "../../components/ServicesPageComponents/HeaderSection/HeaderSection";
import ServiceSelectionSection from "../../components/ServicesPageComponents/ServiceSelectionSection/ServiceSelectionSection";
import { useServicesContext } from "../../context/services";
import services from "../../data/servicesData.json";

import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesPage = () => {
  const currentService = useServicesContext();
  const { servicesData } = services;
  return (
    <section className={cx("services-page")}>
      <HeaderSection background={"services-stock-default"} />
      <ServiceSelectionSection servicesData={servicesData} />
    </section>
  );
};

export default ServicesPage;
