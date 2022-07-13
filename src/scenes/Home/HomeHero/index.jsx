import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--colour-black);
  color: var(--colour-white);
`;

const HeroContent = styled.div`
`;

const HeroTitle = styled.h1`
  font-size: var(--text-xxxxl);

  margin: 0;
`;
const HeroSubtitle = styled.h2`
  font-size: var(--text-xl);
  font-family: var(--font-secondary);
  margin: 0;
`;

function HomeHero() {
  return (
    <HeroContainer>
      <HeroContent className="container">
        <HeroTitle>Run For Their Lives</HeroTitle>
        <HeroSubtitle>5K, 10K, Half Marathon</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
}

export default HomeHero;
