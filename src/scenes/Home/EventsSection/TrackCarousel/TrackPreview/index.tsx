import React from 'react';

import styled from 'styled-components';

type Race = {
  title: string;
  description: string;
  image: string;
};

const RaceParagraphWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

const RaceTrackWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 300px;
  text-align: center;
`;

const RaceHeader = styled.h2`
  font-size: var(--text-xl);
  color: var(--colour-primary);
`;

function TrackPreview(props: { race: Race }) {
  const { race } = props;

  const { title, description, image } = race;

  return (
    <React.Fragment>
      <RaceParagraphWrapper>
        <RaceHeader>{title}</RaceHeader>
        {description}
      </RaceParagraphWrapper>
      <RaceTrackWrapper>
        <img src={image} alt={title} width="300" height="300" data-testid="currentTrackImage" />
      </RaceTrackWrapper>
    </React.Fragment>
  );
}

export default TrackPreview;
