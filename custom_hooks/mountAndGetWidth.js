import { useState, useEffect } from "react";

export const mountAndGetWidth = () => {
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
  return { mounted: mounted, windowWidth: windowWidth };
};
