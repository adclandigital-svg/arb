"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#ffffff] overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative">

        {/* Background Text */}
        <h1 className="absolute top-0 left-0 text-[70px] md:text-[120px] lg:text-[160px] font-bold text-[#106a39]/5 select-none pointer-events-none">
          UPTOWN
        </h1>

        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-8 md:p-12 lg:p-16 shadow-xl rounded-3xl"
          >
            <span className="text-[#106a39] uppercase tracking-widest text-xs md:text-sm font-semibold">
              Overview
            </span>

            <h2 className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Designed Beyond
              <br className="hidden md:block" />
              Expectations
            </h2>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              Uptown is a meticulously planned plotted development located in
              Karnal’s extension corridor. Spread across 14 acres, it blends
              contemporary infrastructure with serene green surroundings.
            </p>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Strategically positioned near essential social infrastructure,
              Uptown ensures seamless connectivity while preserving a peaceful
              living environment.
            </p>

            <Link
              href="/overview"
              className="inline-block mt-8 px-8 py-3 md:px-10 md:py-4 bg-[#106a39] text-white rounded-full hover:bg-[#0d5a30] transition duration-300 shadow-lg text-sm md:text-base"
            >
              Discover The Vision
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative h-[350px] md:h-[450px] lg:h-[600px] rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://www.rbarealcon.com/images/banner-3.webp"
                alt="Uptown Karnal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* STAT CARD */}
            <div className="absolute -bottom-8 md:-bottom-10 left-6 md:left-10 lg:left-16 bg-[#106a39] text-white p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                14+
              </h3>
              <p className="mt-2 text-xs md:text-sm tracking-wide">
                Acres of Premium Living
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}