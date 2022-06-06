import ServicesCard from "./components/ServicesCard";
import services from "../../../data/servicesData.json";

import styles from "./ServicesSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesSection = () => {
    const { servicesData } = services;
    return (
        <section className={cx("service-section")} id="services-section">
            <div className={cx("service-section__title-wrap")}>
                <h2 className={cx("service-section__title")}>Our Services</h2>
            </div>
            <div className={cx("service-section__cards-wrap")}>
                {servicesData.map((service, index) => {
                    return (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default ServicesSection;