import { mountAndGetDimensions } from "../custom_hooks/mountAndGetDimensions";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";
import LandingSection from "../components/LandingPageComponents/LandingSection/LandingSection";
import IntroSection from "../components/LandingPageComponents/IntroSection/IntroSection";
// import CustomersSection from "../components/LandingPageComponents/CustomersSection/CustomersSection";
import ServicesSection from "../components/LandingPageComponents/ServicesSection/ServicesSection";
import ProjectsSection from "../components/LandingPageComponents/ProjectsSection/ProjectsSection";
import ServiceDetailsSection from "../components/LandingPageComponents/ServiceDetailsSection/ServiceDetailsSection";
import TestimonialSection from "../components/LandingPageComponents/TestimonialSection/TestimonialSection";

const CustomersSection = dynamic(() =>
  import(
    "../components//LandingPageComponents/CustomersSection/CustomersSection"
  )
);

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingSection mounted={mountAndGetDimensions().mounted} />
      <IntroSection />
      <CustomersSection
        mounted={mountAndGetDimensions().mounted}
        windowWidth={mountAndGetDimensions().windowWidth}
      />
      <ServicesSection />
      <ProjectsSection />
      <ServiceDetailsSection />
      <TestimonialSection mounted={mountAndGetDimensions().mounted} />
    </div>
  );
}
