import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-grow: 0.3;
  flex-flow: end;

  justify-content: flex-end;
  gap: 4rem;
`;

const Link = styled(HashLink)`
  text-decoration: none;
  align-self: center;

  font-family: var(--font-secondary);
  font-weight: bold;
  color: var(--colour-darkGrey);

  transition: 0.2s;

  &:hover {
    color: var(--colour-primary);
  }

  &.homeLink {
    color: var(--colour-primary);
    font-family: var(--font-primary);
    font-size: var(--text-lg);
  }
`;

const RegisterButton = styled.button`
  background-color: var(--colour-primary);
  color: var(--colour-white);

  font-size: inherit;

  border: none;
  border-radius: 0.5rem;
  padding: 0.5em 1em;

  cursor: pointer;
  &:hover {
    background-color: var(--colour-dark);
  }
`;

function DesktopNavbar(props: { links: string[][] }) {
  const { links } = props;

  // Remove  home page link and assign to variable
  const homeLink = links.shift();

  // Remove register page and assign to variable
  const registerLink = links.pop();

  // Remaining pages
  const pages = links;

  const scrollWithOffset = (el: Element) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -200;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <NavWrapper className="container">
      <Link
        to="#top"
        className="homeLink"
        scroll={(el) => scrollWithOffset(el)}
      >
        {homeLink[1]}
      </Link>
      <PagesWrapper>
        {pages.map((link) => {
          const linkPath = link[0];
          const linkName = link[1];

          return (
            <Link
              key={linkName}
              to={linkPath}
              scroll={(el) => scrollWithOffset(el)}
            >
              {linkName}
            </Link>
          );
        })}
        <Link to={registerLink[0]} scroll={(el) => scrollWithOffset(el)}>
          <RegisterButton>{registerLink[1]}</RegisterButton>
        </Link>
      </PagesWrapper>
    </NavWrapper>
  );
}

export default DesktopNavbar;
