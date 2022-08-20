import React from 'react';
import styled from 'styled-components';

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimerValue = styled.span`
  font-size: var(--text-xxl);
  font-weight: bold;
  font-family: var(--font-secondary);
`;

const TimerCaption = styled.span`
  font-family: var(--font-primary);
  font-size: var(--text-md);
`;

function CountDownValue(props: {value: number, caption: string}) {
  const { value, caption } = props;

  return (
    <ValueWrapper>
      <TimerValue>{value}</TimerValue>
      <TimerCaption>{caption}</TimerCaption>
    </ValueWrapper>
  );
}

export default CountDownValue;
