"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

let lenisInstance = null;

export default function LenisProvider({ children }) {
  const pathname = usePathname();
  const rafRef = useRef(null);

  // INIT LENIS
  useEffect(() => {
    if (lenisInstance) return;

    lenisInstance = new Lenis({
      duration: 1.2, // smoothness
      easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart
      smoothWheel: true,
      smoothTouch: false, // change to true if needed
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    // Scroll to top on load
    lenisInstance.scrollTo(0, { immediate: true });

    // RAF LOOP
    const raf = (time) => {
      lenisInstance?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  // SCROLL TO TOP ON ROUTE CHANGE
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return children;
}