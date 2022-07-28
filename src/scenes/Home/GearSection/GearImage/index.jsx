import React from 'react';
import styled from 'styled-components';

const GearImageWrapper = styled.div`
  background-color: var(--colour-lightGrey);
  max-width: 350px;
  height: 350px;
  overflow: hidden;
  cursor: pointer;
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

function GearImage(props) {
  const { src, alt } = props;

  return (
    <GearImageWrapper>
      <ProductImage src={src} alt={alt} width="350" height="350" />
    </GearImageWrapper>
  );
}

export default GearImage;
