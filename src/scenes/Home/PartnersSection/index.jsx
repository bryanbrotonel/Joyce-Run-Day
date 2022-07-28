import React from 'react';
import styled from 'styled-components';

import PartnerLogoBC from '../../../assets/images/PartnerLogoBC.png?as=webp';
import PartnerLogoVictory from '../../../assets/images/PartnerLogoVictory.png?as=webp';
import PartnerLogoReigningChamp from '../../../assets/images/PartnerLogoReigningChamp.png?as=webp';
import PartnerLogoVanRunCo from '../../../assets/images/PartnerLogoVanRunCo.png?as=webp';
import PartnerLogoRunForHope from '../../../assets/images/PartnerLogoRunForHope.png?as=webp';
import PartnerLogoRunVan from '../../../assets/images/PartnerLogoRunVan.png?as=webp';

const PartnersWrapper = styled.div`
  background-color: var(--colour-primary);
  text-align: center;
  padding: 5rem 0;
`;

const PartnersTitle = styled.span`
  display: inline-block;
  color: var(--colour-white);
  font-family: var(--font-primary);
  font-size: var(--text-xxl);
  font-weight: bold;
  margin-bottom: 1em;
`;

const PartnerLogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;

const PartnerLogo = styled.img`
  height: 32px;
  width: auto;
`;

function PartnersSection() {
  return (
    <PartnersWrapper>
      <PartnersTitle>Partners</PartnersTitle>
      <PartnerLogosWrapper>
        <div>
          <PartnerLogo src={PartnerLogoBC} alt="Partner Logo - BC" />
        </div>
        <div>
          <PartnerLogo
            src={PartnerLogoVictory}
            alt="Partner Logo - Victory Co"
          />
        </div>
        <div>
          <PartnerLogo
            src={PartnerLogoReigningChamp}
            alt="Partner Logo - Reigning Champ"
          />
        </div>
        <div>
          <PartnerLogo
            src={PartnerLogoVanRunCo}
            alt="Partner Logo - Vancouver Running Company"
          />
        </div>
        <div>
          <PartnerLogo
            src={PartnerLogoRunForHope}
            alt="Partner Logo - Run 4 Hope"
          />
        </div>
        <div>
          <PartnerLogo src={PartnerLogoRunVan} alt="Partner Logo - Run Van" />
        </div>
      </PartnerLogosWrapper>
    </PartnersWrapper>
  );
}

export default PartnersSection;
