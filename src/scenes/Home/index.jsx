import React from 'react';

import HomeHero from './HomeHero';
import CountDown from './CountDown';
import AboutSection from './AboutSection';
import PartnersSection from './PartnersSection';
import GearSection from './GearSection';
import EventsSection from './EventsSection';

function Home() {
  return (
    <div>
      <HomeHero />
      <CountDown />
      <AboutSection />
      <EventsSection />
      <GearSection />
      <PartnersSection />
    </div>
  );
}

export default Home;
