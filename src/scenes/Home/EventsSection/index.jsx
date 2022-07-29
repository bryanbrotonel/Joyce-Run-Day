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

const RaceTitle = styled.span`
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

  switch (currentRace) {
    case 'Danielle 5K':
      raceParagraph = (
        <p>
          The Danielle 5K is a scenic route around the Joyce neighbourhood
          dedicated to Danielle and her love for running. This route visits the
          local business that brings the community together, crossing the finish
          line at Danielle&#x27;s favourite local bubble tea stop.
        </p>
      );
      raceTrack = Danielle5KTrack;
      break;
    case 'Brotonel 10K':
      raceParagraph = (
        <p>
          Dedicated to the family that started it all, the Brotonel 10K explores
          the beautiful community that Joyce is. This 10K route takes a trip
          around the Joyce area leaving no area unvisited. Say hello to the
          friendly neighbours as they will become familiar faces.
        </p>
      );
      raceTrack = Brotonel10KTrack;
      break;
    case 'Joyce Half Marathon':
      raceParagraph = (
        <p>
          The Joyce Half Marathon starts and ends at the heart of Joyce, but
          takes an adventure through Vancouver in between. This half marathon
          explores the two sides of Vancouver - in moments runners are
          surrounded by tall skyscrapers to getting lost in the forest.
        </p>
      );
      raceTrack = HalfMarathonTrack;
      break;
    default:
      <p></p>;
      break;
  }

  return (
    <EventsWrapper id="events">
      <EventsTitle>Events</EventsTitle>
      <EventsContainer className="container">
        <RaceParagraphWrapper>
          <RaceHeader>{currentRace}</RaceHeader>
          {raceParagraph}
        </RaceParagraphWrapper>
        <RaceTrackWrapper>
          <img src={raceTrack} alt={currentRace} width="300" height="300"/>
        </RaceTrackWrapper>
      </EventsContainer>
      <RaceList>
        <RaceTitle
          as="button"
          value="Danielle 5K"
          current={'Danielle 5K' == currentRace}
          onClick={(e) => setCurrentRace(e.target.value)}
        >
          Danielle 5K
        </RaceTitle>
        <RaceTitle
          as="button"
          value="Brotonel 10K"
          current={'Brotonel 10K' == currentRace}
          onClick={(e) => setCurrentRace(e.target.value)}
        >
          Brotonel 10K
        </RaceTitle>
        <RaceTitle
          as="button"
          value="Joyce Half Marathon"
          current={'Joyce Half Marathon' == currentRace}
          onClick={(e) => setCurrentRace(e.target.value)}
        >
          Joyce Half Marathon
        </RaceTitle>
      </RaceList>
    </EventsWrapper>
  );
}

export default EventsSection;
