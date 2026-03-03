"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-40 bg-[#f9faf9] overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-8 relative">

        {/* Big Background Text */}
        <h1 className="absolute top-10 left-0 text-[160px] font-bold text-[#106a39]/5 select-none pointer-events-none">
          UPTOWN
        </h1>

        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* ===== LEFT CONTENT BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-16 shadow-2xl rounded-3xl relative z-20"
          >
            <span className="text-[#106a39] uppercase tracking-widest text-sm font-semibold">
              Overview
            </span>

            <h2 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">
              Designed Beyond
              <br />
              Expectations
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Uptown is a meticulously planned plotted development located in
              Karnal’s extension corridor. Spread across 14 acres, it blends
              contemporary infrastructure with serene green surroundings.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Strategically positioned near essential social infrastructure,
              Uptown ensures seamless connectivity while preserving a peaceful
              living environment.
            </p>

            <Link
              href="/overview"
              className="inline-block mt-10 px-10 py-4 bg-[#106a39] text-white rounded-full hover:bg-[#0d5a30] transition duration-300 shadow-lg"
            >
              Discover The Vision
            </Link>
          </motion.div>

          {/* ===== RIGHT IMAGE BLOCK (OVERLAP STYLE) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://www.rbarealcon.com/images/banner-3.webp"
                alt="Uptown Karnal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-12 left-16 bg-[#106a39] text-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-5xl font-semibold">14+</h3>
              <p className="mt-3 text-sm tracking-wide">
                Acres of Premium Living
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}