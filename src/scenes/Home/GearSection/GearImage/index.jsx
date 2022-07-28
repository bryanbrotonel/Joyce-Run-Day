import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Toast from '../../../../components/Toast';

const GearImageWrapper = styled.div`
  background-color: var(--colour-lightGrey);
  max-width: 350px;
  height: 350px;
  overflow: hidden;
  image-rendering: -webkit-optimize-contrast;

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

  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (toastVisible) {
      setTimeout(function () {
        setToastVisible(false);
      }, 3000);
    }
  }, [toastVisible]);

  return (
    <React.Fragment>
      <GearImageWrapper onClick={() => setToastVisible(true)}>
        <ProductImage src={src} alt={alt} width="350" height="350" />
      </GearImageWrapper>
      <Toast message={'Gear coming soon!'} display={+toastVisible} />
    </React.Fragment>
  );
}

export default GearImage;
