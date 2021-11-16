import styled, { keyframes } from "styled-components";

const inAnimation = keyframes`
    0% { 
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const outAnimation = keyframes`
    0% { 
        opacity: 1;
    }
    100% { 
        opacity: 0;
    }
`;

export const Wrapper = styled.div<{ showModal: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  animation: ${({ showModal }) => (showModal ? inAnimation : outAnimation)};
  animation-duration: ${({ showModal, theme }) =>
    `${theme.transitions.duration.short + (showModal ? 0 : 50)}ms`};
  animation-fill-mode: ${({ theme }) => theme.transitions.easing.easeInOut};
`;

export const Background = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000dd;
  border: none;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  max-height: 90vh;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  overflow: auto;

  & > * {
    max-height: 90vh;
  }
`;
