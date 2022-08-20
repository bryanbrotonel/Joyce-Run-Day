import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FooterWrapper = styled.div`
  padding: 4rem 0;
  padding-left: 2rem;

  background-color: var(--colour-lightGrey);
  color: var(--colour-darkGrey);

  @media (min-width: 768px) {
    padding-left: 0rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 8rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 10rem;
  }
`;

const FooterTitle = styled.h1`
  color: var(--colour-primary);
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const FooterSubtitle = styled(FooterTitle)`
  font-family: var(--font-secondary);
  font-size: var(--text-md);
  color: inherit;
`;

const FooterAddress = styled.span`
  font-size: inherit;
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  cursor: pointer;

  li:hover {
    opacity: 0.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1em;

  cursor: pointer;

  svg:hover {
    opacity: 0.6;
  }
`;

const CreditsSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
`;

const CreditLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <div>
          <FooterTitle>Joyce Run Day</FooterTitle>
          <FooterAddress>
            8822 Euclid Ave.
            <br />
            Vancouver, BC V5R 3M5
          </FooterAddress>
        </div>
        <div>
          <FooterSubtitle>Quicklinks</FooterSubtitle>
          <FooterLinks>
            <li>About</li>
            <li>Events</li>
            <li>Gear</li>
            <li>Register</li>
          </FooterLinks>
        </div>
        <div>
          <FooterSubtitle>Follow Us</FooterSubtitle>
          <SocialLinks>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </SocialLinks>
        </div>
      </FooterContent>
      <CreditsSection>
        <span>
          Made with <FontAwesomeIcon icon={faHeart} size="sm" color="#F48C06" />
          &#160;by&#160;
          <CreditLink href="https://bryanbrotonel.live/">Bryan</CreditLink>
        </span>
        <span>
          &#169; {new Date().getFullYear()}. All Rights Reserved | Vancouver, BC
        </span>
      </CreditsSection>
    </FooterWrapper>
  );
}

export default Footer;
