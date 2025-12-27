// src/pages/About.jsx
import React, { useEffect } from "react";

import AboutHero from "../components/About/AboutHero";
import WhoWeAreSection from "../components/About/WhoWeAreSection";
import MissionVision from "../components/About/MissionVision";
import WhatWeDoSection from "../components/About/WhatWeDoSection";
import CorePathStory from "../components/About/CorePathStory";
import FourPillarsMini from "../components/About/FourPillarsMini";
import PartnerCall from "../components/About/PartnerCall";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      
      <AboutHero />           {/*the Hero */}
      <WhoWeAreSection /> 
      <MissionVision />
      <WhatWeDoSection/>
      <CorePathStory />
      <FourPillarsMini />
      <PartnerCall />
    </main>
  );
}
