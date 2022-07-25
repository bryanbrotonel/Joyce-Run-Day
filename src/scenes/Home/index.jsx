import React from 'react';

import HomeHero from './HomeHero';
import CountDown from './CountDown';
import AboutSection from './AboutSection';
import PartnersSection from './PartnersSection';
import GearSection from './GearSection';

function Home() {
  return (
    <div>
      <HomeHero />
      <CountDown />
      <AboutSection />
      <GearSection />
      <PartnersSection />
    </div>
  );
}

export default Home;
