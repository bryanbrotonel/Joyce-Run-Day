import React, { useState } from 'react';
import styled from 'styled-components';

import Brotonel10KTrack from '../../../assets/images/Brotonel10KTrack.png?as=webp';
import Danielle5KTrack from '../../../assets/images/Danielle5KTrack.png?as=webp';
import HalfMarathonTrack from '../../../assets/images/HalfMarathonTrack.png?as=webp';

const EventsWrapper = styled.div`
  padding: 3em 0;
  margin-bottom: 15rem;
  background: var(--colour-lightGrey);
`;

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

const EventsTitle = styled.h1`
  font-size: var(--text-xxl);
  margin: 0;
  margin-bottom: 5rem;
  text-align: center;
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

function EventsSection() {
  const [currentRace, setCurrentRace] = useState('Danielle 5K');
  var raceParagraph = <p></p>;
  var raceTrack;

  var races = [
    {
      title: 'Danielle 5K',
      description:
        'The Danielle 5K is a scenic route around the Joyce neighbourhood dedicated to Danielle and her love for running. This route visits the local business that brings the community together, crossing the finish line at Danielle&#x27;s favourite local bubble tea stop.',
    },

    {
      title: 'Brotonel 10K',
      description:
        'Dedicated to the family that started it all, the Brotonel 10K explores the beautiful community that Joyce is. This 10K route takes a trip around the Joyce area leaving no area unvisited. Say hello to the friendly neighbours as they will become familiar faces.',
    },

    {
      title: 'Joyce Half Marathon',
      description:
        'The Joyce Half Marathon starts and ends at the heart of Joyce, takes an adventure through Vancouver in between. This half marathon explores the two sides of Vancouver - in moments runners are surrounded by tall skyscrapers to getting lost in the forest.',
    },
  ];

  switch (currentRace) {
    case races[0].title:
      raceParagraph = <p>{races[0].description}</p>;
      raceTrack = Danielle5KTrack;
      break;
    case races[1].title:
      raceParagraph = <p>{races[1].description}</p>;
      raceTrack = Brotonel10KTrack;
      break;
    case races[2].title:
      raceParagraph = <p>{races[2].description}</p>;
      raceTrack = HalfMarathonTrack;
      break;
    default:
      <p></p>;
      break;
  }

  const currentRaceComponent = races.map((races) => (
    <RaceTitle
      key={races.title}
      current={races.title == currentRace}
      onClick={() => setCurrentRace(races.title)}
    >
      {races.title}
    </RaceTitle>
  ));

  return (
    <EventsWrapper id="events">
      <EventsTitle>Events</EventsTitle>
      <EventsContainer className="container">
        <RaceParagraphWrapper>
          <RaceHeader>{currentRace}</RaceHeader>
          {raceParagraph}
        </RaceParagraphWrapper>
        <RaceTrackWrapper>
          <img src={raceTrack} alt={currentRace} width="300" height="300" />
        </RaceTrackWrapper>
      </EventsContainer>
      <RaceList>{currentRaceComponent}</RaceList>
    </EventsWrapper>
  );
}

export default EventsSection;
