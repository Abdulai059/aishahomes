import React from "react";

export const performance = {
  trackPageLoad() {
    if (typeof window === "undefined" || !("performance" in window)) return;

    window.addEventListener("load", () => {
      setTimeout(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        const paint = performance.getEntriesByType("paint");

        console.log("Performance:", {
          fcp: paint.find((p) => p.name === "first-contentful-paint")
            ?.startTime,
          lcp: nav.loadEventEnd - nav.fetchStart,
          dom: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
        });
      }, 0);
    });
  },

  trackRender(name, start) {
    const time = performance.now() - start;
    if (time > 100) console.warn(`Slow render: ${name} ${time.toFixed(2)}ms`);
    return time;
  },

  trackImage(src, start) {
    const time = performance.now() - start;
    if (time > 1000) console.warn(`Slow image: ${src} ${time.toFixed(2)}ms`);
    return time;
  },
};

export const withPerformance = (Component, name) => (props) => {
  const start = performance.now();

  React.useEffect(() => {
    performance.trackRender(name, start);
  });

  return <Component {...props} />;
};

export const loadImage = (src) => {
  const start = performance.now();
  const img = new Image();

  img.onload = () => performance.trackImage(src, start);
  img.onerror = () => console.error(`Failed to load: ${src}`);
  img.src = src;

  return img;
};
