"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaHome, FaMapMarkedAlt, FaSwimmer, FaShieldAlt } from "react-icons/fa";
import "./aboutSection.css";

export default function AboutSection() {
  const stats = [
    { icon: <FaHome />, value: "14+", label: "Acres of Premium Living" },
    { icon: <FaMapMarkedAlt />, value: "120+", label: "Luxury Plots" },
    { icon: <FaSwimmer />, value: "5+", label: "Community Amenities" },
    { icon: <FaShieldAlt />, value: "24/7", label: "Security & Support" },
  ];

  const imageRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
            observer.disconnect(); // stop observing after visible
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text">
          <h2>
            Luxury Living <span className="highlight">Redefined</span>
          </h2>
          <p>
            Experience the perfect blend of comfort and elegance in our premium
            residential community. Thoughtfully designed plots, world-class amenities,
            and 24/7 security create a lifestyle you deserve. Discover your dream home today.
          </p>

          <div className="stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section with Reveal */}
        <div className="about-image-container">
          <img
            ref={imageRef}
            src="https://www.rbarealcon.com/images/banner-2.webp"
            alt="Luxury Real Estate"
            className={`about-image ${imageVisible ? "reveal" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}