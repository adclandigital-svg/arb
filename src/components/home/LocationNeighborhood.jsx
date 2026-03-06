// "use client";

// import { motion } from "framer-motion";

// const places = [
//   {
//     name: "Delhi Public School",
//     time: "10 Min",
//     image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
//   },
//   {
//     name: "Medanta Hospital",
//     time: "18 Min",
//     image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
//   },
//   {
//     name: "Ambience Mall",
//     time: "20 Min",
//     image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
//   },
//   {
//     name: "IGI Airport",
//     time: "30 Min",
//     image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
//   }
// ];

// export default function Neighborhood() {

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 80 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <section className="py-4 bg-[#f6faf7] overflow-hidden">

//       <div className="max-w-[1400px] mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center mb-20">

//           <h6 className="uppercase tracking-[4px] text-[#106a39] text-sm font-semibold">
//             Location Advantage
//           </h6>

//           <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4">
//             Neighborhood & Connectivity
//           </h2>

//           <div className="w-20 h-[2px] bg-[#106a39] mx-auto mt-6"></div>

//         </div>


//         {/* Grid */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >

//           {places.map((place, i) => (

//             <motion.div
//               key={i}
//               variants={item}
//               whileHover={{ y: -12 }}
//               className="group relative rounded-2xl overflow-hidden shadow-lg"
//             >

//               {/* Image */}

//               <motion.img
//                 src={place.image}
//                 className="h-[320px] w-full object-cover"
//                 whileHover={{ scale: 1.15, rotate: 1 }}
//                 transition={{ duration: 0.7 }}
//               />

//               {/* Gradient */}

//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>


//               {/* Content */}

//               <div className="absolute bottom-6 left-6 right-6">

//                 <h3 className="text-white text-xl font-semibold">
//                   {place.name}
//                 </h3>

//                 {/* Floating badge */}

//                 <motion.div
//                   animate={{ y: [0, -6, 0] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     delay: i * 0.3
//                   }}
//                   className="mt-3 inline-block 
//                   bg-white/20 backdrop-blur-md text-white 
//                   px-4 py-1 rounded-full text-sm"
//                 >

//                   {place.time} Drive

//                 </motion.div>

//               </div>


//               {/* Hover glow */}

//               <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition"></div>

//             </motion.div>

//           ))}

//         </motion.div>

//       </div>

//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const places = [
  {
    type: "School",
    name: "Delhi Public School",
    time: "10 Min",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
  },
  {
    type: "Hospital",
    name: "Medanta Hospital",
    time: "18 Min",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    type: "Mall",
    name: "Ambience Mall",
    time: "20 Min",
    image: "https://img.freepik.com/premium-photo/shopping-mall-interior_1120772-11106.jpg?w=1480",
  },
  {
    type: "Airport",
    name: "IGI Airport",
    time: "30 Min",
    image: "https://img.freepik.com/premium-photo/blue-white-airplane-is-parked-airport_198067-988693.jpg?w=1060",
  },
];

export default function NeighborhoodHoverTabs() {
  const [active, setActive] = useState("School");

  const activePlace = places.find((p) => p.type === active);

  return (
    <section className="py-10 md:py-24 bg-[#f7faf8]">

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* ===== Heading ===== */}
        <div className="text-center mb-5 md:mb-5">
          <h6 className="uppercase tracking-[4px] text-[#106a39] text-xs md:text-sm font-semibold">
            Location Advantage
          </h6>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-3 md:mt-4 text-gray-900">
            Explore the Surrounding Lifestyle
          </h2>

          <div className="w-16 md:w-20 h-[3px] bg-[#106a39] mx-auto mt-5"></div>
        </div>

        {/* ===== Tabs (Mobile Scrollable) ===== */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-start md:justify-center">

          {["School", "Hospital", "Mall", "Airport"].map((tab) => (
            <div
              key={tab}
              onMouseEnter={() => setActive(tab)}
              onClick={() => setActive(tab)}
              className={`whitespace-nowrap cursor-pointer px-6 py-2 rounded-full font-medium transition-all duration-300
              ${
                active === tab
                  ? "bg-[#106a39] text-white shadow-lg scale-105"
                  : "bg-white border border-gray-300 text-black"
              }`}
            >
              {tab}
            </div>
          ))}

        </div>

        {/* ===== Animated Content ===== */}
        <div className="relative">

          <AnimatePresence mode="wait">

            {activePlace && (

              <motion.div
                key={activePlace.type}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden 
                md:flex md:items-center md:gap-10 p-4 md:p-10"
              >

                {/* ===== Image ===== */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/2 rounded-xl overflow-hidden"
                >
                  <motion.img
                    src={activePlace.image}
                    alt={activePlace.name}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                </motion.div>

                {/* ===== Content ===== */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:w-1/2 mt-6 md:mt-0"
                >

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                    {activePlace.name}
                  </h3>

                  <p className="mt-3 text-gray-500 text-sm sm:text-base">
                    Premium connectivity near the project location with smooth access.
                  </p>

                  {/* Time Badge */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mt-6 inline-block bg-[#106a39]/20 text-[#106a39] 
                    px-5 py-2 rounded-full text-sm font-medium"
                  >
                    ⏱ {activePlace.time} Drive
                  </motion.div>

                </motion.div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}