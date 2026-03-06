"use client";

import { motion } from "framer-motion";

const places = [
  {
    name: "Delhi Public School",
    time: "10 Min",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
  },
  {
    name: "Medanta Hospital",
    time: "18 Min",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
  },
  {
    name: "Ambience Mall",
    time: "20 Min",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
  },
  {
    name: "IGI Airport",
    time: "30 Min",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
  }
];

export default function Neighborhood() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-4 bg-[#f6faf7] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <h6 className="uppercase tracking-[4px] text-[#106a39] text-sm font-semibold">
            Location Advantage
          </h6>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4">
            Neighborhood & Connectivity
          </h2>

          <div className="w-20 h-[2px] bg-[#106a39] mx-auto mt-6"></div>

        </div>


        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {places.map((place, i) => (

            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -12 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >

              {/* Image */}

              <motion.img
                src={place.image}
                className="h-[320px] w-full object-cover"
                whileHover={{ scale: 1.15, rotate: 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>


              {/* Content */}

              <div className="absolute bottom-6 left-6 right-6">

                <h3 className="text-white text-xl font-semibold">
                  {place.name}
                </h3>

                {/* Floating badge */}

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="mt-3 inline-block 
                  bg-white/20 backdrop-blur-md text-white 
                  px-4 py-1 rounded-full text-sm"
                >

                  {place.time} Drive

                </motion.div>

              </div>


              {/* Hover glow */}

              <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition"></div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}