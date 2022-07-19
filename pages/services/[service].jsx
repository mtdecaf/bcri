import HeaderSection from "../../components/ServicesPageComponents/HeaderSection/HeaderSection";
import GuarenteeSection from "../../components/GuaranteeSection/GuaranteeSection";
import { useRouter } from "next/router";
import services from "../../data/servicesData.json";

import styles from "./ServicePage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicePage = () => {
  const { servicesData } = services;
  const router = useRouter();
  const serviceSelected = router.query.service;
  const serviceSelectedData = servicesData.find (service => service.title.replace(/\s/g, '').toLowerCase() === serviceSelected)
  console.log(serviceSelectedData);
  return (
    <section className={cx("service-page")}>
      <HeaderSection background={"services-stock-selected"} serviceSelectedData={serviceSelectedData} />
      <GuarenteeSection />
    </section>
  );
};

export default ServicePage;
