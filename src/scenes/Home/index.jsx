import React from 'react';
import styled from 'styled-components';

import HomeHero from './HomeHero';
import CountDown from './CountDown';

function Home() {
  return (
    <div>
      <HomeHero />
      <CountDown />
      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          architecto nesciunt veniam hic quod cum? Ducimus expedita ipsum minus
          ratione, laborum, iure cupiditate aliquid laudantium eos repellat,
          molestias maiores quis?
        </p>
      </div>
    </div>
  );
}

export default Home;
