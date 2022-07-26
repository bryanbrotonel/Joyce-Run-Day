import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 4rem;

  align-items: center;

  padding: 10em 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutTitle = styled.h1`
  font-size: var(--text-xxl);
  margin: 0;
`;
const AboutParagraph = styled.p`
  margin-bottom: 0rem;
  color: var(--colour-darkGrey);
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

const AboutContentWrapper = styled.div`
  @media (min-width: 768px) {
    flex-grow: 0;
    flex-basis: 600px;
  }
`;

const AboutImageWrapper = styled.div`
  @media (min-width: 768px) {
    flex-grow: 1;
    flex-basis: 600px;
  }
`;

const AboutButton = styled.button`
  display: inline-block;
  background-color: var(--colour-primary);
  color: var(--colour-white);

  font-size: inherit;
  text-transform: uppercase;
  text-decoration: none;

  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;

  &:hover {
    background-color: var(--colour-dark);
  }
`;

function AboutSection() {
  var todaysDate = new Date();
  var targetDate = new Date(`Jul 11, ${todaysDate.getFullYear()}`); // Set target date to current year

  // If current date is past target date of current year, set target to next year
  if (todaysDate > targetDate) {
    targetDate.setFullYear(todaysDate.getFullYear() + 1);
  }

  var formattedTargetDate = targetDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get current race year and set ordinal indicator
  var raceYear = targetDate.getFullYear() - todaysDate.getFullYear();
  if (raceYear > 10 && raceYear < 14) {
    raceYear += 'th';
  } else {
    switch (raceYear) {
      case 1:
        raceYear += 'st';
        break;

      case 2:
        raceYear += 'nd';
        break;

      case 3:
        raceYear += 'rd';
        break;

      default:
        raceYear += 'th';
        break;
    }
  }

  return (
    <div className="container">
      <AboutContainer>
        <AboutContentWrapper>
          <div>
            <AboutTitle>{raceYear} Annual Joyce Run Day</AboutTitle>
            <AboutParagraph>
              Join us for the {raceYear} running of Joyce Run Day on&#160;
              {formattedTargetDate}. Participants will set out on our various
              courses to not only accomplish a personal goal but also support
              RUNVAN&#174;'s mission to foster the growth of healthy, active
              communities in British Columbia and across Canada. Join us!
            </AboutParagraph>
            <AboutButton as="a" href="https://runvan.org/give" target="_blank">
              About RUNVAN&#174;
            </AboutButton>
          </div>
        </AboutContentWrapper>
        <AboutImageWrapper>
          <AboutImage
            src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=100"
            alt=""
          />
        </AboutImageWrapper>
      </AboutContainer>
    </div>
  );
}

export default AboutSection;
