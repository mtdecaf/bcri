import { useState, useEffect } from "react";

export const mountAndGetDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());

  useEffect(() => {
    setMounted(true);
  }, []);

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  function getWindowHeight() {
    const height = hasWindow ? window.innerHeight : null;
    return height;
  }

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
        setWindowHeight(getWindowHeight());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);
  return {
    mounted: mounted,
    windowWidth: windowWidth,
    windowHeight: windowHeight,
  };
};
