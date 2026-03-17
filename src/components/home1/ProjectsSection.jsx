"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./projects.css";

const plans = [
  {
    type: "2BHK",
    area: "1200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
  },
  {
    type: "3BHK",
    area: "1600 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
  },
  {
    type: "4BHK",
    area: "2200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const imageRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="proj2-section">
      <div className="proj2-container">
        {/* HEADER */}
        <div className="proj2-header">
          <h6>Projects</h6>
          <h2>Floor Plan Collection</h2>
          <p className="proj2-subtext">
            Discover thoughtfully crafted floor plans designed to blend space,
            comfort, and modern living. Each layout reflects intelligent design,
            ensuring maximum functionality and a luxurious lifestyle experience
            tailored for your needs.
          </p>
        </div>

        {/* MAIN IMAGE WITH CROSSFADE */}
        <div className="proj2-main-wrapper" ref={imageRef}>
          <div className="proj2-main">
            {visible &&
              plans.map((plan, i) => (
                <motion.img
                  key={i}
                  src={plan.image}
                  alt={plan.type}
                  className={`proj2-crossfade-image ${i === active ? "active" : ""}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              ))}

            {/* Overlay info */}
            <div className="proj2-overlay">
              <h3>{plans[active].type}</h3>
              <span>{plans[active].area}</span>
            </div>

            {/* Right-side buttons */}
            {visible && (
              <motion.div
                className="proj2-button-tab-onimage"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    className={`proj2-tab-button ${active === i ? "active" : ""}`}
                    onClick={() => setActive(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4>{plan.type}</h4>
                    <span>{plan.area}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}