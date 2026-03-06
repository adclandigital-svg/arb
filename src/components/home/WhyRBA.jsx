"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Prime Location",
    text: "Strategically located developments offering seamless connectivity to major highways, schools and commercial zones.",
  },
  {
    title: "Trusted Legacy",
    text: "RBA Group has built a reputation for quality construction and transparent processes.",
  },
  {
    title: "Modern Infrastructure",
    text: "Wide roads, landscaped parks and thoughtfully designed layouts built for future living.",
  },
  {
    title: "Smart Investment",
    text: "High growth potential making every property a strong long-term investment.",
  },
];

const banks = [
  "https://www.rbarealcon.com/images/hdfc.jpg",
  "https://www.rbarealcon.com/images/sbi.jpg",
  "https://www.rbarealcon.com/images/icici-logo.jpg",
  "https://www.rbarealcon.com/images/union-bank-of-india.webp",
];

export default function WhyRBA() {
  return (
    <section className="py-18 bg-white relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#106a39]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#106a39]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[4px] text-[#106a39] text-sm font-semibold"
          >
            Why Choose Us
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900"
          >
            The RBA Difference
          </motion.h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://www.rbarealcon.com/images/gallery-3.webp"
                className="w-full h-full object-cover transition duration-[2000ms] group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* floating stat */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 left-10 bg-white shadow-xl px-10 py-6 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-[#106a39]">500+</h3>
              <p className="text-gray-500 text-sm">Happy Families</p>
            </motion.div>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative">
            {/* animated vertical line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.2 }}
              className="absolute left-3 top-0 w-[2px] bg-[#106a39]/30"
            ></motion.div>

            <div className="space-y-14">
              {points.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  {/* animated dot */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 bg-[#106a39] rounded-full mt-1 flex-shrink-0"
                  ></motion.div>

                  {/* content card */}
                  <div className="bg-white p-6 rounded-xl shadow-md group-hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* BANKS */}
       
      </div>
    </section>
  );
}
