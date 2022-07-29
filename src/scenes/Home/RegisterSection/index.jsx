import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RegisterBackground from '../../../assets/images/RegisterBackground.png?as=webp';
import Toast from '../../../components/Toast';

const RegisterSectionBackground = styled.div`
  background: url(${RegisterBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  /* Shadow overlay over image: #0C120C in RGB */
  box-shadow: inset 0 0 0 2000px rgba(5, 7, 5, 0.7);

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
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (toastVisible) {
      setTimeout(function () {
        setToastVisible(false);
      }, 3000);
    }
  }, [toastVisible]);

  return (
    <RegisterSectionBackground id="register">
      <RegisterSectionWrapper className="container">
        <RegisterSectionContainer>
          <ContentWrapper>
            <RegisterTitle>Take Your Mark</RegisterTitle>
            <span>
              Join hundreds of runners in celebrating the joy of running and
              staying active in our communities. We also have goodies at the
              finish line.
            </span>
            <div>
              <RegisterButton onClick={() => setToastVisible(true)}>
                Register Now
              </RegisterButton>
            </div>
          </ContentWrapper>
        </RegisterSectionContainer>
      </RegisterSectionWrapper>
      <Toast message={'Registration opening soon!'} display={+toastVisible} />
    </RegisterSectionBackground>
  );
}

export default RegisterSection;
