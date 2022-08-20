import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const NavContainer = styled.div`
  height: 78px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index: 10;
  top: 0;

  background: var(--colour-white);

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Navbar() {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    function checkDesktop() {
      setDesktop(window.innerWidth > 768);
    }

    window.addEventListener('resize', checkDesktop);

    checkDesktop();

    return function cleanup() {
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  const links = [
    ['/', 'Joyce Run Day'],
    ['/#about', 'About'],
    ['/#events', 'Events'],
    ['/#gear', 'Gear'],
    ['/#register', 'Register'],
  ];
  return (
    <NavContainer>
      {isDesktop ? (
        <DesktopNavbar links={links} />
      ) : (
        <MobileNavbar links={links} />
      )}
    </NavContainer>
  );
}

export default Navbar;
