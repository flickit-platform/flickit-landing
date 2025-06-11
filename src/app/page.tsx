"use client";

import Footer from "@/components/homePage/FooterSection";
import SubFooter from "@/components/homePage/SubFooter";
import "@/config/i18n";
import HeroSection from "@/components/homePage/Hero";
import KitsSection from "@/components/homePage/KitsSection";
import ProcessRoadmap from "@/components/homePage/ProcessRoadmap";
import Features from "@/components/homePage/Features";
import FaqSection from "@/components/homePage/FaqSection";
import Customers from "@/components/homePage/customers";
import { appWithTranslation } from 'next-i18next';

function Home() {
  return (
    <>
      <HeroSection />
      <KitsSection />
      <Customers/>
      <ProcessRoadmap />
      <Features />
      <FaqSection />
      <SubFooter />
      <Footer />
    </>
  );
}
export default appWithTranslation(Home)
