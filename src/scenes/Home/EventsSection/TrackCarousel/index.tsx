import React, { useState } from 'react';
import TrackSelector from './TrackSelector';
import TrackPreview from './TrackPreview';

import styled from 'styled-components';

type Race = {
  title: string;
  description: string;
  image: string;
};

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2em;
  color: var(--colour-darkGrey);

  @media (min-width: 768px) {
    gap: 10em;
    flex-direction: row;
    justify-content: center;
  }
`;

const RaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 5rem;

  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 3em;
    flex-direction: row;
  }
`;

function TrackCarousel(props: { races: Array<Race> }) {
  const { races } = props;

  const [currentRace, setCurrentRace] = useState(0);

  const raceSelector = races.map((race, index) => (
    <TrackSelector
      key={`race-${index}`}
      raceTitle={race.title}
      onClickCallback={() => setCurrentRace(index)}
      current={index == currentRace}
      testID={`trackSelect-${index}`}
    />
  ));

  return (
    <div>
      <EventsContainer className="container">
        <TrackPreview race={races[currentRace]} />
      </EventsContainer>
      <RaceList>{raceSelector}</RaceList>
    </div>
  );
}

export default TrackCarousel;
