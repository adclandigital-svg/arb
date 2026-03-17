"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaHome, FaBullhorn } from "react-icons/fa";
import "./latestUpdates.css";

const updates = [
  {
    title: "Uptown Launch Event",
    date: "March 15, 2026",
    icon: <FaBullhorn />,
    description: "Grand launch with exclusive offers and live walkthroughs.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
  },
  {
    title: "New Amenities Added",
    date: "March 10, 2026",
    icon: <FaHome />,
    description: "Swimming pool, community hall, and jogging track now ready.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200",
  },
  {
    title: "360° Virtual Tour",
    date: "March 05, 2026",
    icon: <FaCalendarAlt />,
    description: "Explore the project virtually before visiting the site.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200",
  },
  {
    title: "Community Meetup",
    date: "March 01, 2026",
    icon: <FaBullhorn />,
    description: "Residents gather for networking and fun activities.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
  },
  {
    title: "New Phase Launch",
    date: "Feb 25, 2026",
    icon: <FaHome />,
    description: "Another phase with premium plots and amenities.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
];

export default function UpdatesSection() {
  return (
    <section className="updates-section">
      <div className="updates-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="updates-header"
        >
          <h6>Latest Updates</h6>
          <h2>Project News & Highlights</h2>
          <p>Stay up-to-date with our latest events, new launches, and exciting milestones at Uptown.</p>
        </motion.div>

        {/* Grid of updates */}
        <div className="updates-grid">
          {updates.map((update, i) => (
            <motion.div
              key={i}
              className="update-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="update-image">
                <motion.div
                  className="image-mask"
                  initial={{ x: 0 }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1 }}
                ></motion.div>
                <img src={update.image} alt={update.title} />
                <div className="update-overlay">
                  <div className="update-icon">{update.icon}</div>
                  <h3>{update.title}</h3>
                  <span>{update.date}</span>
                  <p>{update.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}