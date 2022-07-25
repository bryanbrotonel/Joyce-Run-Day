import React from 'react';
import styled from 'styled-components';

import GearImage from './GearImage';

const GearContainer = styled.div`
  padding: 10rem 0;
  text-align: center;
`;

const GearTitle = styled.h1`
  font-size: var(--text-xl);
  margin: 0;
  margin-bottom: 5rem;
`;

const GearRowContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: center;
    grid-template-columns: auto auto auto;
  }
`;

function GearSection() {
  return (
    <GearContainer className="container">
      <div>
        <GearTitle>Finish In Style</GearTitle>
      </div>
      <GearRowContainer>
        <GearImage></GearImage>
        <GearImage></GearImage>
        <GearImage></GearImage>
      </GearRowContainer>
    </GearContainer>
  );
}

export default GearSection;
