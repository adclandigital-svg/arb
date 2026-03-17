// "use client";

// import dynamic from "next/dynamic";
// import { Suspense } from "react";

// /* ================= DYNAMIC COMPONENTS ================= */

// const Hero = dynamic(() => import("@/components/home/Hero"), {
//   loading: () => <Loading />,
// });

// const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
//   loading: () => <Loading />,
// });

// const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
//   loading: () => <Loading />,
// });

// const WhyRBA = dynamic(() => import("@/components/home/WhyRBA"), {
//   loading: () => <Loading />,
// });

// const FeaturedCommunities = dynamic(() =>
//   import("@/components/home/FeaturedCommunities"),
//   { loading: () => <Loading /> }
// );

// const LocationNeighborhood = dynamic(() =>
//   import("@/components/home/LocationNeighborhood"),
//   { loading: () => <Loading /> }
// );

// const WalkthroughSection = dynamic(() =>
//   import("@/components/home/WalkthroughSection"),
//   { loading: () => <Loading /> }
// );

// const BlogSection = dynamic(() =>
//   import("@/components/home/BlogSection"),
//   { loading: () => <Loading /> }
// );

// /* ================= LOADING COMPONENT ================= */

// function Loading() {
//   return (
//     <div className="py-20 flex justify-center items-center">
//       <div className="w-10 h-10 border-4 border-[#106a39] border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );
// }

// /* ================= HOME ================= */

// export default function Home() {
//   return (
//     <Suspense fallback={<Loading />}>
//       <Hero />
//       <AboutSection />
//       <LocationNeighborhood />
//       <WhyRBA />
//       <FeaturedCommunities />
//       <BlogSection />
//       <Testimonials />
//       <WalkthroughSection />
//     </Suspense>
//   );
// }

"use client";
function Loading() {
  return (
    <div className="py-20 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-[#106a39] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

import dynamic from "next/dynamic";
import { Suspense } from "react";
const Hero = dynamic(() => import("@/components/home/Hero"), {
  loading: () => <Loading />,
});
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  loading: () => <Loading />,
});
import LocationTabs from "@/components/home1/LocationTabs";
import Testimonials from "@/components/home1/Testimonials";
import ProjectsSection from "@/components/home1/ProjectsSection";
import LatestUpdates from "@/components/home1/LatestUpdates";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <AboutSection />
      <LocationTabs/>
      <ProjectsSection/>
      <LatestUpdates/>
      <Testimonials/>
    </Suspense>
  );
}