import styles from "./ServicesSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

import ServicesCard from "./components/ServicesCard";

const servicesData = [
    {
        title: "Roof Inspections",
        description: "We inspect all types of roofs, including metal, wood, and concrete. We also inspect all types of roofs, including metal, wood, and concrete.",
    },
    {
        title: "Roof Inspections",
        description: "We inspect all types of roofs, including metal, wood, and concrete. We also inspect all types of roofs, including metal, wood, and concrete.",
    },
    {
        title: "Roof Inspections",
        description: "We inspect all types of roofs, including metal, wood, and concrete. We also inspect all types of roofs, including metal, wood, and concrete.",
    },
];

const ServicesSection = () => {
    return (
        <section className={cx("service-section")}>
            <div className={cx("service-section__title-wrap")}>
                <h1 className={cx("service-section__title")}>Our Services</h1>
            </div>
            <div className={cx("service-section__cards-wrap")}>
                {servicesData.map((service, index) => {
                    return (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default ServicesSection;