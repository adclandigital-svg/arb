import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import WhyRBA from "@/components/home/WhyRBA";
import FeaturedCommunities from "@/components/home/FeaturedCommunities";
import LocationNeighborhood from "@/components/home/LocationNeighborhood";
import WalkthroughSection from "@/components/home/WalkthroughSection"
import BlogSection from "@/components/home/BlogSection"


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <LocationNeighborhood/>
      <WhyRBA />
      <FeaturedCommunities />
      <BlogSection/>
      <Testimonials />
      <WalkthroughSection/>
    </>
  );
}
