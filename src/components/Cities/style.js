import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const GymContainer = styled.div `
margin: 30px auto;

animation: ${fade};
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: .9s;
opacity: 1;
  `; 
