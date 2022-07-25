import React from 'react';
import styled from 'styled-components';

const GearImageWrapper = styled.div`
  background-color: var(--colour-lightGrey);
  max-width: 350px;
  height: 350px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ease-out 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.3s;
  }
`;

function GearImage() {
  return (
    <GearImageWrapper>
      <ProductImage
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=100"
        alt=""
      />
    </GearImageWrapper>
  );
}

export default GearImage;
