import React from 'react';
import styled from 'styled-components';

import HomeHero from './HomeHero';
import CountDown from './CountDown';
import AboutSection from './AboutSection';

function Home() {
  return (
    <div>
      <HomeHero />
      <CountDown />
      <AboutSection />
    </div>
  );
}

export default Home;
