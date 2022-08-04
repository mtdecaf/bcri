import { mountAndGetWidth } from "../custom_hooks/mountAndGetWidth";

import styles from "../styles/Home.module.css";
import LandingSection from "../components/LandingPageComponents/LandingSection/LandingSection";
import IntroSection from "../components/LandingPageComponents/IntroSection/IntroSection";
import CustomersSection from "../components/LandingPageComponents/CustomersSection/CustomersSection";
import ServicesSection from "../components/LandingPageComponents/ServicesSection/ServicesSection";
import ProjectsSection from "../components/LandingPageComponents/ProjectsSection/ProjectsSection";
import ServiceDetailsSection from "../components/LandingPageComponents/ServiceDetailsSection/ServiceDetailsSection";
import TestimonialSection from "../components/LandingPageComponents/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingSection mounted={mountAndGetWidth().mounted} />
      <IntroSection />
      <CustomersSection mounted={mountAndGetWidth().mounted} />
      <ServicesSection />
      <ProjectsSection />
      <ServiceDetailsSection />
      <TestimonialSection mounted={mountAndGetWidth().mounted} />
    </div>
  );
}
