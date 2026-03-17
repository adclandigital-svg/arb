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

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">

        {/* TEXT */}
        <div className={`about-text ${visible ? "active" : ""}`}>
          <h2>
            Where Nature <br />
            <span className="highlight">Meets Modern Luxury</span>
          </h2>

          <p>
            Uptown is a meticulously designed haven that seamlessly blends with
            nature. Located in the heart of Karnal's extension, our project is
            strategically placed near essential social infrastructure and
            prominent landmarks. Offering an exclusive collection of residential
            plots sprawled across 14 acres, Uptown defines luxury living.
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

        {/* IMAGE */}
        <div className="about-image-container">
          <div className={`image-reveal-wrapper ${visible ? "active" : ""}`}>
            <img
              src="https://www.rbarealcon.com/images/banner-2.webp"
              alt="Luxury Real Estate"
              className="about-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}