import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../../../assets/images/HeroBackground.png?as=webp';

const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${HeroBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  /* Shadow overlay over image: #0C120C in RGB */
  box-shadow: inset 0 0 0 2000px rgba(5, 7, 5, 0.7);

  color: var(--colour-white);
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
      <div className="container">
        <HeroTitle>Run For Their Lives</HeroTitle>
        <HeroSubtitle>5K, 10K, Half Marathon</HeroSubtitle>
      </div>
    </HeroContainer>
  );
}

export default HomeHero;
