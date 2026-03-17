"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, Headphones } from "lucide-react";
import "./testimonials.css";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Home Buyer",
    text: "Buying our first home felt overwhelming until we connected with RBA Group. Their team guided us with patience and expertise."
  },
  {
    name: "Amit Verma",
    role: "Investor",
    text: "From site visits to documentation, everything was handled smoothly. A truly hassle-free experience."
  },
  {
    name: "Neha Kapoor",
    role: "Property Owner",
    text: "They deliver homes that reflect trust, quality and long-term value. Highly professional team."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="t7-section">

      <div className="t7-container">

        {/* LEFT */}
        <div className="t7-left">
          <h6>Testimonials</h6>
          <h2>What Our Clients Say</h2>

          <p className="t7-desc">
            We believe in delivering more than just properties — we create
            spaces that reflect trust, quality, and long-term value for every family.
          </p>

          {/* ICON FEATURES */}
          <div className="t7-features">

            <div className="t7-feature">
              <ShieldCheck size={20} />
              <span>Trusted by Families</span>
            </div>

            <div className="t7-feature">
              <Building2 size={20} />
              <span>Premium Developments</span>
            </div>

            <div className="t7-feature">
              <Headphones size={20} />
              <span>Dedicated Support</span>
            </div>

          </div>

          <div className="t7-line"></div>
        </div>

        {/* RIGHT */}
        <div className="t7-right">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="t7-card"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>{testimonials[index].text}</p>

              <div className="t7-user">
                <h4>{testimonials[index].name}</h4>
                <span>{testimonials[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAV */}
          <div className="t7-nav">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={index === i ? "active" : ""}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}