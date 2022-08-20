import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
    0% {
      -webkit-transform: translateY(30px);
              transform: translateY(30px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
`;

const fadeOutDown = keyframes`
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(30px);
              transform: translateY(30px);
      opacity: 0;
    }
`;

interface ToastContainerProps {
  readonly $display: boolean;
}

const ToastContainer = styled.div<ToastContainerProps>`
  min-width: 250px;
  margin-left: -137px;
  text-align: center;
  padding: 1rem;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  background-color: var(--colour-lightGrey);
  color: var(--colour-darkGrey);
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;

  visibility: ${(props) => (props.$display ? 'visible' : 'hidden')};
  animation: ${(props) => (props.$display ? fadeInUp : fadeOutDown)} 0.5s
    ease-out;
  transition: visibility 0.5s ease-out;
`;

function Toast(props: {message: string, display: boolean}) {
  const { message, display } = props;

  return (
    <ToastContainer $display={display}>
      <div>
        <span>{message}</span>
      </div>
    </ToastContainer>
  );
}

export default Toast;
