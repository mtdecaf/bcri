import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";
import LandingSection from "../components/LandingPageComponents/LandingSection/LandingSection";
import ServicesSection from "../components/LandingPageComponents/ServicesSection/ServicesSection";
import TestimonialSection from "../components/LandingPageComponents/TestimonialSection/TestimonialSection";
import CustomersSection from "../components/LandingPageComponents/CustomersSection/CustomersSection";

export default function Home() {
  const hasWindow = typeof window !== "undefined";


  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    setMounted(true);
  }, []);

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }
  
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return (
    <div className={styles.container}>
      <LandingSection mounted={mounted} windowWidth={windowWidth} />
      <CustomersSection mounted={mounted} />
      <ServicesSection />
      <TestimonialSection mounted={mounted} windowWidth={windowWidth} />
    </div>
  );
}
