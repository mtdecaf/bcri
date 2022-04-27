import styles from "../styles/Home.module.css";
import LandingSection from "../components/LandingSection/LandingSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingSection />
    </div>
  );
}
