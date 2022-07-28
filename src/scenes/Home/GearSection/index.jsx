import React from 'react';
import styled from 'styled-components';
import GearImage from './GearImage';

import JRD_Bottle from '../../../assets/images/JRD_Bottle.png?as=webp';
import JRD_Hat from '../../../assets/images/JRD_Hat.png?as=webp';
import JRD_Shirt from '../../../assets/images/JRD_Shirt.png?as=webp';

const GearContainer = styled.div`
  margin-bottom: 15rem;
  text-align: center;
`;

const GearTitle = styled.h1`
  font-size: var(--text-xxl);
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
    <GearContainer id="gear" className="container">
      <div>
        <GearTitle>Finish In Style</GearTitle>
      </div>
      <GearRowContainer>
        <GearImage src={JRD_Hat} alt="Joyce Run Day Hat"></GearImage>
        <GearImage src={JRD_Shirt} alt="Joyce Run Day Shirt"></GearImage>
        <GearImage src={JRD_Bottle} alt="Joyce Run Day Bottle"></GearImage>
      </GearRowContainer>
    </GearContainer>
  );
}

export default GearSection;
