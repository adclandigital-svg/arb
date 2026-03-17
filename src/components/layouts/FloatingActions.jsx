"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./floating.css"

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show scroll-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Optional: auto refresh page every 10 minutes (600000 ms)
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // window.location.reload(); // Uncomment to auto-refresh the page
    }, 600000); 
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="floating-actions">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/911234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll-to-top button */}
      {showTopBtn && (
        <button onClick={scrollToTop} className="scroll-top-btn">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}