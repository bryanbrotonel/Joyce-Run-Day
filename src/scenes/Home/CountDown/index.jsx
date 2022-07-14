import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CountDownValue from './CountDownValue';

const CountDownWrapper = styled.div`
  background-color: var(--colour-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountDownContent = styled.div`
  padding: 5rem 0;
  color: var(--colour-white);
  font-family: var(--font-secondary);
  text-align: center;
`;

const CountDownTitle = styled.h1`
  font-family: var(--font-secondary);
  font-size: var(--text-xxxl);
  margin-top: 0;
`;

const TimerRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8em;

    justify-content: center;
    align-items: center;
  }
`;

function CountDown() {
  var targetDate = new Date('Jul 11, 1998'); // Set target date
  targetDate.setFullYear(new Date().getFullYear() + 1); // Set target year to next year
  var countDownDate = targetDate.getTime(); // Get target time

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  // Get respsective time values
  var days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <CountDownWrapper>
      <CountDownContent>
        <CountDownTitle>July 11 2023</CountDownTitle>
        <TimerRow>
          <CountDownValue value={days} caption="Days" />
          <CountDownValue value={hours} caption="Hours" />
          <CountDownValue value={minutes} caption="Minutes" />
          <CountDownValue value={seconds} caption="Seconds" />
        </TimerRow>
      </CountDownContent>
    </CountDownWrapper>
  );
}

export default CountDown;
