import React from 'react';
import styled from 'styled-components';

const RegisterSectionBackground = styled.div`
  background: var(--colour-black);
  padding: 10rem 0;
`;

const RegisterSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterSectionContainer = styled.div`
  width: 100%;
  max-width: 850px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;
  padding: 3rem 0;

  background-color: var(--colour-lightGrey);
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 425px;
  text-align: center;
`;

const RegisterTitle = styled.h1`
  font-size: var(--text-xxl);
  margin-top: 0;
  margin-bottom: 1rem;
`;

const RegisterButton = styled.button`
  background-color: var(--colour-primary);
  color: var(--colour-white);

  font-size: var(--text-md);

  border: none;
  border-radius: 0.5rem;
  margin-top: 2rem;
  padding: 0.5em 2em;

  cursor: pointer;
  &:hover {
    background-color: var(--colour-dark);
  }
`;

function RegisterSection() {
  return (
    <RegisterSectionBackground>
      <RegisterSectionWrapper className="container">
        <RegisterSectionContainer>
          <ContentWrapper>
            <RegisterTitle>Take Your Mark</RegisterTitle>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              laborum nulla voluptatibus blanditiis neque qui.
            </span>
            <div>
              <RegisterButton>Register</RegisterButton>
            </div>
          </ContentWrapper>
        </RegisterSectionContainer>
      </RegisterSectionWrapper>
    </RegisterSectionBackground>
  );
}

export default RegisterSection;
