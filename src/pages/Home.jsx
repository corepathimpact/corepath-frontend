// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WhySection from "../components/Home/WhySection";
import OurPillarsOfImpact from "../components/Home/OurPillarsOfImpact";
import RollingImagesSection from "../components/Home/RollingImagesSection";
import CorePathEcosystem from "../components/Home/CorePathEcosystem";
import ImpactStatement from "../components/Home/ImpactStatement";
import Testimonials from "../components/Home/Testimonials";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import NewsletterSignup from "../components/Home/NewsletterSignup";



/**
 * 🏠 HOME PAGE CONTAINER
 * -------------------------------------------------------------
 * This page acts as a wrapper that loads all homepage sections:
 * - HeroSection (top banner)
 * - WhySection (explains CorePath’s mission)
 * - FrameworksSection (five frameworks)
 * More sections will be added below as separate components.
 * -------------------------------------------------------------
 */

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 🟢 Hero Section */}
      <HeroSection />

      {/* 🩵 Why CorePath Exists Section */}
      <WhySection />

      {/* 🌍 Our Pillars of Impact Section */}
      <OurPillarsOfImpact />   {/* ✅ Appears below WhySection */}

	{/* 🎞️ Rolling Image Strip */}
      <RollingImagesSection />

      {/* Product Ecosystem*/}
      <CorePathEcosystem /> 
      <ImpactStatement />
      <Testimonials/>
      <UpcomingEvents />
      <NewsletterSignup />	

    </main>
  );
};

export default Home;

