import HeaderSection from "../../components/ServicesPageComponents/HeaderSection/HeaderSection";
import GuarenteeSection from "../../components/GuaranteeSection/GuaranteeSection";
import ServiceDescription from "../../components/ServicesPageComponents/ServiceDescription/ServiceDescription";
import { useRouter } from "next/router";
import { mountAndGetDimensions } from "../../custom_hooks/mountAndGetDimensions";

import services from "../../data/servicesData.json";

import styles from "./ServicePage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicePage = () => {
  const { servicesData } = services;
  const router = useRouter();
  const serviceSelected = router.query.service;
  const serviceSelectedData = servicesData.find(
    (service) =>
      service.title.replace(/\s/g, "").toLowerCase() === serviceSelected
  );

  return (
    <section className={cx("service-page")}>
      <HeaderSection
        background={"services-stock-selected"}
        serviceSelectedData={serviceSelectedData}
        mounted={mountAndGetDimensions().mounted}
        windowWidth={mountAndGetDimensions().windowWidth}
      />
      <ServiceDescription serviceSelectedData={serviceSelectedData} />
      <GuarenteeSection />
    </section>
  );
};

export default ServicePage;
