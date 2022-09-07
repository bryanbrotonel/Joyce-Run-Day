import React from 'react';
import styled from 'styled-components';

import TrackCarousel from './TrackCarousel';

import Brotonel10KTrack from '../../../assets/images/Brotonel10KTrack.png?as=webp';
import Danielle5KTrack from '../../../assets/images/Danielle5KTrack.png?as=webp';
import HalfMarathonTrack from '../../../assets/images/HalfMarathonTrack.png?as=webp';

const EventsWrapper = styled.div`
  padding: 3em 0;
  margin-bottom: 15rem;
  background: var(--colour-lightGrey);
`;

const EventsTitle = styled.h1`
  font-size: var(--text-xxl);
  margin: 0;
  margin-bottom: 5rem;
  text-align: center;
`;

function EventsSection() {
  var races = [
    {
      title: 'Danielle 5K',
      description:
        'The Danielle 5K is a scenic route around the Joyce neighbourhood dedicated to Danielle and her love for running. This route visits the local business that brings the community together, crossing the finish line at Danielle&#x27;s favourite local bubble tea stop.',
      image: Danielle5KTrack,
    },

    {
      title: 'Brotonel 10K',
      description:
        'Dedicated to the family that started it all, the Brotonel 10K explores the beautiful community that Joyce is. This 10K route takes a trip around the Joyce area leaving no area unvisited. Say hello to the friendly neighbours as they will become familiar faces.',
      image: Brotonel10KTrack,
    },

    {
      title: 'Joyce Half Marathon',
      description:
        'The Joyce Half Marathon starts and ends at the heart of Joyce, takes an adventure through Vancouver in between. This half marathon explores the two sides of Vancouver - in moments runners are surrounded by tall skyscrapers to getting lost in the forest.',
      image: HalfMarathonTrack,
    },
  ];

  return (
    <EventsWrapper id="events">
      <EventsTitle>Events</EventsTitle>
      <TrackCarousel races={races} />
    </EventsWrapper>
  );
}

export default EventsSection;
