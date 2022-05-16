import styles from "../styles/Home.module.css";
import LandingSection from "../components/LandingSection/LandingSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import CustomersSection from "../components/CustomersSection/CustomersSection";

export default function Home() {
  const scrollTo = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
  };
  return (
    <div className={styles.container}>
      <LandingSection scrollTo={scrollTo} />
      <CustomersSection />
      <ServicesSection />
      <TestimonialSection />
    </div>
  );
}
