import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;

  background: var(--colour-black);
  color: var(--colour-white);

  transform: ${(props) => (props.display ? 'none' : 'translateX(100%)')};
  transition: 0.5s;
`;

const MenuContainer = styled.div`
  padding: 40px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: auto;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const Link = styled(HashLink)`
  display: inline-block;

  font-family: var(--font-secondary);
  font-size: var(--text-xl);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colour-white);

  &:nth-last-of-type(1) {
    color: var(--colour-primary);
  }
`;

const Footer = styled.div`
  margin-top: 3rem;
`;

const FooterTitle = styled.h3`
  margin-bottom: 0.5rem;
`;
const FooterSubtitle = styled.p`
  margin: 0;
`;

function NavMenu(props) {
  const links = props.links;

  // Configure home link
  links[0][0] = '#top';
  links[0][1] = 'Home';


  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <Menu display={props.display}>
      <MenuContainer>
        <IconContainer>
          <Icon icon={faX} size="lg" onClick={() => props.toggleMenu(false)} />
        </IconContainer>
        <NavLinkWrapper>
          {links.map((link) => {
            const linkPath = link[0];
            const linkName = link[1];

            return (
              <Link
                key={linkName}
                to={linkPath}
                onClick={() => props.toggleMenu(false)}
                scroll={(el) => scrollWithOffset(el)}
              >
                {linkName}
              </Link>
            );
          })}
        </NavLinkWrapper>
        <Footer>
          <hr />
          <FooterTitle>Joyce Run Day</FooterTitle>
          <FooterSubtitle>Annual running event in Vancouver, BC</FooterSubtitle>
        </Footer>
      </MenuContainer>
    </Menu>
  );
}

export default NavMenu;
