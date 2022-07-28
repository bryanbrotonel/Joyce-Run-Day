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
          Danielle 5K, ipsum dolor sit amet consectetur adipisicing elit. Quod
          tempore debitis dicta sapiente at, veniam iusto consectetur, aperiam,
          eius quaerat consequuntur facere. Commodi doloremque nobis est eum
          iusto, veritatis molestias!
        </p>
      );
      raceTrack = Danielle5KTrack;
      break;
    case 'Brotonel 10K':
      raceParagraph = (
        <p>
          Brotonel 10K, ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio veniam culpa inventore nihil cum porro eveniet, fugiat
          soluta. Libero ducimus nesciunt cum magni repudiandae dolore
          repellendus nulla. Ipsa, tempore eligendi.
        </p>
      );
      raceTrack = Brotonel10KTrack;
      break;
    case 'Joyce Half Marathon':
      raceParagraph = (
        <p>
          Joyce Half Marathon, ipsum dolor sit amet consectetur adipisicing
          elit. Quas earum accusamus, quae amet dolores voluptas nemo commodi,
          autem deleniti modi repudiandae cum nesciunt hic aspernatur iste!
          Blanditiis nesciunt sed vero.
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
