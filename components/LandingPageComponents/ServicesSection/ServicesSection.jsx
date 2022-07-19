import ServicesCard from "../../ServicesCard/ServicesCard.jsx";
import services from "../../../data/servicesData.json";

import styles from "./ServicesSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesSection = () => {
    const { servicesData } = services;
    
    return (
        <section className={cx("service-section")} id="services-section">
            <div className={cx("service-section__cards-wrap")}>
                {servicesData.slice(0, 3).map((service, index) => {
                    return (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            shortDescription={service.shortDescription}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default ServicesSection;