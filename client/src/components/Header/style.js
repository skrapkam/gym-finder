import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;


export const HeaderCover = styled.div `
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: .3s;
opacity: 1;
max-width: 90%;
margin: 30px auto;
   `;
