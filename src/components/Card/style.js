import styled from 'styled-components';

export const CardContainer = styled.div `
  border: 1px solid blue;
  max-width: 345px;
  margin: auto;
  padding: 20px;
  padding-right: 70px;
  &{CardContainer}:hover{
    filter: drop-shadow(4px 5px 0px blue);
    right: 3px;
    bottom: 3px;
    z-index:100;
    position: relative;
  }
  
  background: #ffffff;
   `;
