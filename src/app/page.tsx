"use client";

import Footer from "@/components/homePage/footer";
import "../config/i18n";
import HeroSection from "@/components/homePage/heroSection";
import Cards from "@/components/homePage/cards";
import ProcessRoadmap from "@/components/homePage/processRoadmap";

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
