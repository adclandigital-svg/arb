// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Rohit & Sneha Sharma",
//     text: "Buying our first home felt overwhelming until we connected with RBA Group. Their team guided us through every step with patience and expertise. Today, we’re proud homeowners and couldn’t be happier with our decision!",
//   },
//   {
//     name: "Amit Verma",
//     text: "From site visits to documentation, everything was handled smoothly. They turned my investment into a hassle-free experience.",
//   },
//   {
//     name: "Neha Kapoor",
//     text: "What impressed us most was the attention to detail and the quality of construction. They don’t just sell property, they deliver homes that truly reflect trust and comfort.",
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   // AUTO SLIDER
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-16 md:py-24 overflow-hidden bg-[#e9e9e9]">

//       {/* GRID PATTERN */}
//       <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px]" />

//       {/* FLOATING GRADIENT BLOBS */}
//       <motion.div
//         animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute top-10 left-10 w-72 h-72 bg-[#106a39]/10 rounded-full blur-3xl"
//       />

//       <motion.div
//         animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
//         transition={{ duration: 14, repeat: Infinity }}
//         className="absolute bottom-10 right-10 w-80 h-80 bg-[#106a39]/10 rounded-full blur-3xl"
//       />

//       <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 text-center">

//         {/* Heading */}
//         <h6 className="uppercase tracking-[3px] md:tracking-[4px] text-[#106a39] text-xs md:text-sm font-semibold">
//           Testimonials
//         </h6>

//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 md:mt-4 text-gray-900">
//           What Clients Say
//         </h2>

//         <div className="w-16 md:w-20 h-[2px] bg-[#106a39] mx-auto mt-5 md:mt-6 mb-14 md:mb-20"></div>

//         {/* Card */}
//         <div className="relative min-h-[260px] md:min-h-[320px] flex justify-center items-center">

//           <AnimatePresence mode="wait">

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -40, scale: 0.85 }}
//               transition={{ duration: 0.5 }}
//               className="absolute w-full max-w-[700px] bg-white/90 backdrop-blur p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-gray-100"
//             >

//               {/* Quote */}
//               <div className="text-4xl md:text-6xl text-[#106a39]/20 mb-4 md:mb-6">
//                 ”
//               </div>

//               {/* Text */}
//               <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
//                 {testimonials[index].text}
//               </p>

//               {/* Stars */}
//               <div className="mt-4 md:mt-6 text-[#f5a623] text-lg md:text-xl">
//                 ★★★★★
//               </div>

//               {/* Name */}
//               <h4 className="mt-4 md:mt-6 text-base md:text-lg font-semibold text-gray-900">
//                 — {testimonials[index].name}
//               </h4>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 md:gap-6 mt-10 md:mt-14">

//           <button
//             onClick={prev}
//             className="text-black w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:bg-[#106a39] hover:text-white transition"
//           >
//             ←
//           </button>

//           <button
//             onClick={next}
//             className="text-black w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:bg-[#106a39] hover:text-white transition"
//           >
//             →
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rohit & Sneha Sharma",
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

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#f6faf7]">

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h6 className="uppercase tracking-[4px] text-[#106a39] text-sm font-semibold">
            Testimonials
          </h6>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Client Experience
          </h2>

          <div className="w-20 h-[3px] bg-[#106a39] mt-6"></div>

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >

              <div className="text-6xl text-[#106a39]/20">“</div>

              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                {testimonials[index].text}
              </p>

              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                {testimonials[index].name}
              </h4>

              <p className="text-sm text-[#106a39]">
                {testimonials[index].role}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* RIGHT STACKED CARDS */}
        <div className="relative h-[400px]">

          {testimonials.map((item, i) => {

            const isActive = i === index;

            return (
              <motion.div
                key={i}
                onClick={() => setIndex(i)}
                className={`absolute w-full cursor-pointer rounded-3xl p-8 shadow-2xl
                transition-all duration-500
                ${isActive ? "z-20 scale-100 bg-white" : "z-10 scale-90 bg-white/70 blur-[0.5px]"}`}
                animate={{
                  y: isActive ? 0 : 60,
                  rotate: isActive ? 0 : -5,
                }}
                transition={{ duration: 0.5 }}
              >

                <p className="text-gray-600 text-base">
                  "{item.text}"
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">
                    — {item.name}
                  </h4>

                  <p className="text-sm text-[#106a39]">
                    {item.role}
                  </p>
                </div>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}