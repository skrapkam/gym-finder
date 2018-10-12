import styled, {keyframes} from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;


export const TitleWrapper = styled.div `
  text-align: center;
  font-weight: 400;
  font-size: 1.5em;
  margin-top: 20px;
  &:hover {
    background: black;
    color: white;
  }
 animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: .4s;
opacity: 1;

`;

export const SubtitleWrapper = styled.div `
text-align: center;
margin: 10px auto;
font-style: italic;
font-weight: 200;
 animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: .4s;

opacity: 1;


`;
