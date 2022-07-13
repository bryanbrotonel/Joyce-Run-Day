import React from 'react';
import styled from 'styled-components';

import HomeHero from './HomeHero';

const HomeContainer = styled.div`
  & > div {
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    & > div {
      margin-bottom: 12rem;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <HomeHero />
      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          architecto nesciunt veniam hic quod cum? Ducimus expedita ipsum minus
          ratione, laborum, iure cupiditate aliquid laudantium eos repellat,
          molestias maiores quis?
        </p>
      </div>
    </HomeContainer>
  );
}

export default Home;
