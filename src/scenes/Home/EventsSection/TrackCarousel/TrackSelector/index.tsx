import React from 'react';

import styled from 'styled-components';

interface RaceTitleProps {
  current: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RaceTitle = styled.span<RaceTitleProps>`
  display: inline-block;
  font-size: var(--text-md);
  font-family: var(--font-secondary);
  font-weight: bold;

  border: none;
  background-color: transparent;
  color: ${(props) =>
    props.current ? 'var(--colour-primary)' : 'var(--colour-darkGrey)'};

  cursor: pointer;
  &:hover {
    color: var(--colour-primary);
  }
`;

function TrackSelector(props: {
  raceTitle: String;
  current: boolean;
  onClickCallback: Function;
  testID: String;
}) {
  const { raceTitle, onClickCallback, current, testID } = props;

  return (
    <RaceTitle
      current={current}
      onClick={() => onClickCallback()}
      data-testid={testID}
    >
      {raceTitle}
    </RaceTitle>
  );
}

export default TrackSelector;
