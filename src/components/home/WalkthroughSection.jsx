"use client";

import { motion } from "framer-motion";

export default function WalkthroughSection() {
  return (
    <section className="py-14 bg-[#ffffff] overflow-hidden">

      <div className="max-w-[1700px] mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <motion.h6
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:.5 }}
            className="uppercase tracking-[4px] text-[#106a39] text-sm font-semibold"
          >
            Virtual Experience
          </motion.h6>

          <motion.h2
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:.7 }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4"
          >
            360° Walkthrough
          </motion.h2>

          <div className="w-20 h-[2px] bg-[#106a39] mx-auto mt-6"></div>

        </div>


        {/* Walkthrough Viewer */}

        <motion.div
          initial={{ opacity:0, scale:.95 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >

          <iframe
            src="https://walkinside.s3.ap-south-1.amazonaws.com/uptown/index.html"
            className="w-full h-[650px] border-0"
            allowFullScreen
          ></iframe>

        </motion.div>


        {/* Floating Info */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:.3 }}
          className="text-center mt-10"
        >

          <p className="text-gray-600 max-w-[700px] mx-auto">
            Explore the project through our immersive 360° virtual walkthrough
            and experience the architecture, interiors, and surroundings
            before visiting the site.
          </p>

        </motion.div>

      </div>

    </section>
  );
}