"use client";

import { motion } from "framer-motion";

const connectivity = [
  { place: "NH-44 Highway", time: "5 Min" },
  { place: "Karnal City Center", time: "10 Min" },
  { place: "Delhi Border", time: "1 Hr" },
  { place: "IGI Airport", time: "1.5 Hr" },
];

export default function Connectivity() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">

      {/* background pattern */}
      <div className="absolute inset-0 opacity-30
      bg-[radial-gradient(#00000012_1px,transparent_1px)]
      [background-size:24px_24px]"></div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative">

        {/* heading */}
        <div className="text-center mb-14 md:mb-20">

          <h6 className="uppercase tracking-[4px] text-[#106a39] text-xs md:text-sm font-semibold">
            Connectivity
          </h6>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 text-gray-900">
            Well Connected Location
          </h2>

          <div className="w-16 md:w-20 h-[2px] bg-[#106a39] mx-auto mt-6"></div>

        </div>

        {/* timeline */}
        <div className="relative">

          {/* desktop horizontal line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 mx-auto w-[80%] h-[2px] bg-gray-200"></div>

          {/* mobile vertical line */}
          <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid md:grid-cols-4 gap-10">

            {connectivity.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:.6, delay:i*0.15 }}
                viewport={{ once:true }}
                className="relative flex md:block items-start gap-5 text-left md:text-center"
              >

                {/* circle */}
                <div className="
                w-14 h-14 md:w-16 md:h-16
                rounded-full
                bg-[#106a39]
                text-white
                flex items-center justify-center
                text-xs md:text-sm font-semibold
                shadow-lg
                z-10
                md:mx-auto
                ">

                  {item.time}

                </div>

                {/* content */}
                <div className="md:mt-6">

                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {item.place}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Driving Distance
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}