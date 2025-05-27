"use client";

import Footer from "@/components/homePage/Footer";
import "../config/i18n";
import HeroSection from "@/components/homePage/HeroSection";
import Cards from "@/components/homePage/Cards";
import ProcessRoadmap from "@/components/homePage/ProcessRoadmap";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ProcessRoadmap />
      <Footer />
    </>
  );
}
