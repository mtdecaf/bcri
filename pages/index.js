import styles from "../styles/Home.module.css";
import LandingSection from "../components/LandingSection/LandingSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingSection />
      <ServicesSection />
    </div>
  );
}
