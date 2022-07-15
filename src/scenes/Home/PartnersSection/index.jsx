import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faApple,
  faPiedPiperAlt,
  faSlack,
  faYCombinator,
} from '@fortawesome/free-brands-svg-icons';

const PartnersWrapper = styled.div`
  background-color: var(--colour-primary);
  text-align: center;
  padding: 5rem 0;
`;

const PartnersTitle = styled.h1`
  color: var(--colour-white);
  font-size: var(--text-xxl);
  margin: 0;
  margin-bottom: 2rem;
`;

const PartnerLogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: var(--text-xl);
  color: var(--colour-white);
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

function PartnersSection() {
  return (
    <PartnersWrapper>
        <PartnersTitle>Partners</PartnersTitle>
        <PartnerLogosWrapper>
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faPiedPiperAlt} />
          <FontAwesomeIcon icon={faApple} />
          <FontAwesomeIcon icon={faSlack} />
          <FontAwesomeIcon icon={faYCombinator} />
        </PartnerLogosWrapper>
    </PartnersWrapper>
  );
}

export default PartnersSection;
