import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: var(--colour-black);
`;

const Title = styled.h3`
  color: var(--colour-primary);
  margin: 0;
  text-decoration: none;
`;

function MobileNavbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggleMenu]);

  return (
    <React.Fragment>
      <NavbarContainer className="container">
        <Link to="/">
          <Title>Joyce Run Day</Title>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={() => setToggleMenu(true)}
        />
      </NavbarContainer>
      <NavMenu
        links={props.links}
        display={+toggleMenu}
        toggleMenu={setToggleMenu}
      />
    </React.Fragment>
  );
}

export default MobileNavbar;
