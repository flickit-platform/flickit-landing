"use client";

import Footer from "@/components/homePage/FooterSection";
import "../config/i18n";
import HeroSection from "@/components/homePage/Hero";
import KitsSection from "@/components/homePage/KitsSection";
import ProcessRoadmap from "@/components/homePage/ProcessRoadmap";
import Features from "@/components/homePage/Features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KitsSection />
      <ProcessRoadmap />
      <Features />
      <Footer />
    </>
  );
}
