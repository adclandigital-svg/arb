"use client";

import { useState, useEffect, useRef } from "react";
import "./locationTabs.css";

const places = [
  {
    type: "School",
    name: "Delhi Public School",
    time: "10 Min",
    image:
      "https://img.freepik.com/premium-photo/photo-kid-classroom_1153002-946.jpg?w=1480",
  },
  {
    type: "Hospital",
    name: "Medanta Hospital",
    time: "18 Min",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    type: "Mall",
    name: "Ambience Mall",
    time: "20 Min",
    image:
      "https://img.freepik.com/premium-photo/shopping-mall-interior_1120772-11106.jpg?w=1480",
  },
  {
    type: "Airport",
    name: "IGI Airport",
    time: "30 Min",
    image:
      "https://img.freepik.com/premium-photo/blue-white-airplane-is-parked-airport_198067-988693.jpg?w=1060",
  },
];

export default function LocationTabs() {
  const [active, setActive] = useState("School");
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);

  const activePlace = places.find((p) => p.type === active);

  // 🔥 Preload images (no flicker)
  useEffect(() => {
    places.forEach((place) => {
      const img = new Image();
      img.src = place.image;
    });
  }, []);

  // 🔥 Trigger animation ONLY ONCE
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);

            // remove animation after first run
            setTimeout(() => {
              setHasAnimated(true);
            }, 1000);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`loc2-section ${inView ? "in-view" : ""}`}
    >
      <div className="loc2-container">
        {/* Header */}
        <div className="loc2-header">
          <h6>Location Advantage</h6>
          <h2>Experience the Neighborhood</h2>
        </div>

        <div className="loc2-wrapper">
          {/* LEFT TABS */}
          <div className="loc2-tabs">
            {places.map((item, index) => (
              <div
                key={item.type}
                onMouseEnter={() => setActive(item.type)}
                onClick={() => setActive(item.type)}
                className={`loc2-tab ${active === item.type ? "active" : ""}`}
              >
                <span className="loc2-number">0{index + 1}</span>
                <div>
                  <h4>{item.type}</h4>
                  <p>{item.time} Away</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="loc2-display">
            {places.map((place) => (
              <div
                key={place.type}
                className={`loc2-image-wrapper ${
                  active === place.type ? "active" : ""
                }`}
              >
                {/* Reveal only first time */}
                <div
                  className={`image-reveal ${
                    !hasAnimated && active === place.type
                      ? "first-load"
                      : "done"
                  }`}
                >
                  <img src={place.image} alt={place.name} />
                </div>

                {/* Overlay */}
                <div className="loc2-overlay">
                  <h3>{place.name}</h3>
                  <span>⏱ {place.time} Drive</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
