import HeaderSection from "../../components/ServicesPageComponents/HeaderSection/HeaderSection";
import ServiceSelectionSection from "../../components/ServicesPageComponents/ServiceSelectionSection/ServiceSelectionSection";
import GuarenteeSection from "../../components/GuaranteeSection/GuaranteeSection";
import { mountAndGetDimensions } from "../../custom_hooks/mountAndGetDimensions";
import services from "../../data/servicesData.json";
import Image from "next/image";

import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesPage = () => {
  const { servicesData } = services;
  return (
    <section className={cx("services-page")}>
      <HeaderSection background={"services-stock-default"} mounted={mountAndGetDimensions().mounted} windowWidth={mountAndGetDimensions().windowWidth} />
      <ServiceSelectionSection servicesData={servicesData} />
      <div className={cx("services-page__image-wrap")}>
        <Image
          className={cx("services-page__image")}
          width={6504}
          height={4336}
          src="/stock-images/young-contractor-in-a-hard-hat-talking-on-the-phone.jpg"
        />
      </div>
      <GuarenteeSection />
    </section>
  );
};

export default ServicesPage;
