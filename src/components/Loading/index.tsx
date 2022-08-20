import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  margin: auto;
  padding: 50px 0;

  text-align: center;
  font-size: var(--text-xxl);
  font-weight: bold;
  font-family: var(--font-primary);
  color: var(--colour-primary);
`;

function Loading() {
  return (
    <LoadingContainer>
      <span>Joyce Run Day</span>
    </LoadingContainer>
  );
}

export default Loading;
