import ServicesCard from "./components/ServicesCard";

import styles from "./ServicesSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const servicesData = [
    {
        title: "Roof Inspections",
        icon: "IoHome",
        description: "We inspect all types of roofs, including metal, wood, and concrete. We also inspect all types of roofs, including metal, wood, and concrete.",
    },
    {
        title: "Roof Inspections",
        icon: "IoDocumentText",
        description: "We inspect all types of roofs, including metal, wood, and concrete. We also inspect all types of roofs, including metal, wood, and concrete.",
    },
    {
        title: "Roof Inspections",
        icon: "RiPencilRuler2Fill",
        description: "We inspect all types of roofs, including metal, wood, and concrete. We also inspect all types of roofs, including metal, wood, and concrete.",
    },
];

const ServicesSection = () => {
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