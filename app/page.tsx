import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Outfit } from "@next/font/google";
import { Metadata } from "next";


const outfit = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Welcome to USG Exports",
  description: "At USG Exports, we take immense pride in connecting the world to the finest exports from India. With a legacy of excellence, we're your trusted partner in sourcing quality products that meet your exacting standards"
  // other metadata
};
export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      {/* <AboutSectionTwo />*/}
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
    </>
  );
}
