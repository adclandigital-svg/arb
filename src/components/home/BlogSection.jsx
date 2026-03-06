// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const posts = [
//   {
//     title: "Uptown Project Launch Successfully Completed",
//     date: "March 2025",
//     image: "https://www.rbarealcon.com/images/banner-3.webp",
//     desc: "Discover how our flagship project is redefining modern living with premium infrastructure and smart planning.",
//   },
//   {
//     title: "Why Invest in Residential Plots in Karnal?",
//     date: "Feb 2025",
//     image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
//     desc: "Investment insights and future growth potential of real estate development in prime locations.",
//   },
//   {
//     title: "Modern Amenities That Elevate Your Lifestyle",
//     date: "Jan 2025",
//     image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//     desc: "Smart community living with green spaces, connectivity, and premium facilities.",
//   },
//   {
//     title: "Sustainable Living With Premium Infrastructure",
//     date: "Jan 2025",
//     image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
//     desc: "A carefully planned community offering modern amenities, smart connectivity, eco-friendly design and strong investment potential.",
//   },
// ];

// export default function BlogSection() {
//   const featured = posts[0];
//   const sidePosts = posts.slice(1);

//   return (
//     <section className="py-20 bg-[#f8faf9] relative">
//       {/* Background Pattern */}
//       <div
//         className="absolute inset-0 opacity-20 
//       bg-[radial-gradient(#106a3915_1px,transparent_1px)]
//       [background-size:25px_25px]"
//       />

//       <div className="max-w-[1700px] mx-auto px-6 relative">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h6 className="uppercase tracking-[5px] text-[#106a39] text-sm font-semibold">
//             News & Updates
//           </h6>

//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-4 text-gray-900">
//             Articles & Insights
//           </h2>

//           <div className="w-24 h-[3px] bg-[#106a39] mx-auto mt-6"></div>
//         </div>

//         {/* ================= LAYOUT ================= */}
//         <div className="grid lg:grid-cols-3 gap-14">
//           {/* ===== FEATURED ARTICLE (BIG LEFT) ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 relative group rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <motion.img
//               src={featured.image}
//               className="w-full h-[400px] md:h-[450px] lg:h-[600px] object-cover group-hover:scale-110 transition duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10 right-10 text-white">
//               <span className="bg-[#106a39] px-4 py-1 rounded-full text-xs">
//                 {featured.date}
//               </span>

//               <h3 className="text-3xl font-semibold mt-4 leading-tight">
//                 {featured.title}
//               </h3>

//               <p className="mt-3 text-gray-200 text-sm md:text-base">
//                 {featured.desc}
//               </p>

//               <Link
//                 href="#"
//                 className="inline-block mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 Read Full Article
//               </Link>
//             </div>
//           </motion.div>

//           {/* ===== SIDE ARTICLE LIST (RIGHT COLUMN) ===== */}
//           <div className="space-y-8">
//             {sidePosts.map((post, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex gap-5 bg-white p-5 rounded-2xl shadow-md cursor-pointer"
//               >
//                 <img
//                   src={post.image}
//                   className="w-32 h-32 rounded-xl object-cover"
//                 />

//                 <div>
//                   <span className="text-xs text-[#106a39] font-semibold">
//                     {post.date}
//                   </span>

//                   <h4 className="font-semibold text-gray-900 mt-2 text-sm md:text-base">
//                     {post.title}
//                   </h4>

//                   <Link
//                     href="#"
//                     className="text-[#106a39] text-xs mt-2 inline-block"
//                   >
//                     Read →
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "Uptown Project Launch Successfully Completed",
    date: "March 2025",
    image: "https://www.rbarealcon.com/images/banner-3.webp",
    desc: "Discover how our flagship project is redefining modern living with premium infrastructure and smart planning.",
  },
  {
    title: "Why Invest in Residential Plots in Karnal?",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
    desc: "Investment insights and future growth potential of real estate development in prime locations.",
  },
  {
    title: "Modern Amenities That Elevate Your Lifestyle",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    desc: "Smart community living with green spaces, connectivity, and premium facilities.",
  },
  {
    title: "Sustainable Living With Premium Infrastructure",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    desc: "A carefully planned community offering modern amenities and eco-friendly design.",
  },
];

export default function BlogSection() {
  const featured = posts[0];
  const sidePosts = posts.slice(1);

  return (
    <section className="py-24 bg-[#f6faf7] relative overflow-hidden">

      {/* 🔥 Floating Animated Background */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#106a39]/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#106a39]/5 rounded-full blur-3xl"
      />

      <div className="max-w-[1700px] mx-auto px-6 relative">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h6 className="uppercase tracking-[5px] text-[#106a39] text-sm font-semibold">
            News & Updates
          </h6>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-gray-900">
            Articles & Insights
          </h2>

          <div className="w-24 h-[3px] bg-[#106a39] mx-auto mt-6"></div>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* ===== FEATURED ===== */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src={featured.image}
              className="w-full h-[400px] md:h-[600px] object-cover"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.8 }}
            />

            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition duration-700" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-12 left-10 right-10 text-white"
            >
              <span className="bg-[#106a39] px-4 py-1 rounded-full text-xs">
                {featured.date}
              </span>

              <h3 className="text-3xl md:text-4xl font-semibold mt-4 leading-tight">
                {featured.title}
              </h3>

              <p className="mt-4 text-gray-200">
                {featured.desc}
              </p>

              <Link
                href="#"
                className="inline-block mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Read Full Article →
              </Link>
            </motion.div>
          </motion.div>

          {/* ===== SIDE ARTICLES ===== */}
          <div className="space-y-8">

            {sidePosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="flex gap-5 bg-white p-5 rounded-2xl shadow-lg relative overflow-hidden group"
              >

                {/* Image */}
                <motion.img
                  src={post.image}
                  className="w-28 h-28 rounded-xl object-cover"
                  whileHover={{ scale: 1.2, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />

                <div>
                  <span className="text-xs text-[#106a39] font-semibold">
                    {post.date}
                  </span>

                  <h4 className="font-semibold text-gray-900 mt-2 text-sm md:text-base">
                    {post.title}
                  </h4>

                  <Link
                    href="#"
                    className="text-[#106a39] text-xs mt-3 inline-block hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#106a39]/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
