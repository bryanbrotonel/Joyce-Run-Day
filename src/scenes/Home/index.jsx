import React from 'react';

import HomeHero from './HomeHero';
import CountDown from './CountDown';
import AboutSection from './AboutSection';
import PartnersSection from './PartnersSection';

function Home() {
  return (
    <div>
      <HomeHero />
      <CountDown />
      <AboutSection />
      <PartnersSection />
    </div>
  );
}

export default Home;
