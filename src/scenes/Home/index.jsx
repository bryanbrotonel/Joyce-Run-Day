import React from 'react';

import HomeHero from './HomeHero';
import CountDown from './CountDown';
import AboutSection from './AboutSection';
import PartnersSection from './PartnersSection';
import GearSection from './GearSection';
import EventsSection from './EventsSection';
import RegisterSection from './RegisterSection';

function Home() {
  return (
    <div>
      <HomeHero />
      <CountDown />
      <AboutSection />
      <EventsSection />
      <GearSection />
      <RegisterSection />
      <PartnersSection />
    </div>
  );
}

export default Home;
