import React from 'react';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  background: var(--colour-lightGrey);
  padding: 10em 0;
`;

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
  color: var(--colour-darkGrey);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function EventsSection() {
  return (
    <EventsWrapper>
      <EventsContainer className="container">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            tempore debitis dicta sapiente at, veniam iusto consectetur,
            aperiam, eius quaerat consequuntur facere. Commodi doloremque nobis
            est eum iusto, veritatis molestias!
          </p>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            tempore debitis dicta sapiente at, veniam iusto consectetur,
            aperiam, eius quaerat consequuntur facere. Commodi doloremque nobis
            est eum iusto, veritatis molestias!
          </p>
        </div>
      </EventsContainer>
    </EventsWrapper>
  );
}

export default EventsSection;
