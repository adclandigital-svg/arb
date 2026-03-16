"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./heroSlider.css";

const slides = [
  { id: 1, background: "https://www.rbarealcon.com/images/banner-2.webp" },
  { id: 2, background: "https://www.rbarealcon.com/images/banner-3.webp" },
  { id: 3, background: "https://www.rbarealcon.com/images/banner-4.webp" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.background})`,
            opacity: index === current ? 1 : 0,
          }}
        >
          <div className="overlay"></div>
        </div>
      ))}

      {/* Bottom-right Prev/Next Arrow Buttons */}
      <div className="bottom-nav-buttons">
        <button className="cta-nav-btn prev-btn" onClick={prevSlide}><FaArrowLeft /></button>
        <button className="cta-nav-btn next-btn" onClick={nextSlide}><FaArrowRight /></button>
      </div>

      {/* Left-side Social Icons */}
      <div className="social-icons left">
        {socialLinks.map((item, idx) => (
          <a key={idx} href={item.href} target="_blank" rel="noreferrer">{item.icon}</a>
        ))}
      </div>
    </section>
  );
}