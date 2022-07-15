import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
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

function AboutSection() {
  return (
    <div className="container">
      <AboutContainer>
        <AboutContentWrapper>
          <div>
            <AboutTitle>1st Annual Joyce Run Day</AboutTitle>
            <AboutParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              recusandae vero veritatis odio alias iusto blanditiis error
              dignissimos obcaecati enim magnam minima ullam, delectus
              aspernatur veniam vitae adipisci ipsa unde!
            </AboutParagraph>
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
