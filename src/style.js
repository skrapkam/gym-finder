import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const p = css`
  margin-bottom: 10px;
`;

export const Cities = styled.div`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3em;
  justify-items: center;
  border: 1px solid blue;
  background: #fff;
  &{Cities}:hover{
    filter: drop-shadow(4px 5px 0px blue);
    right: 3px;
    bottom: 3px;
    z-index:100;
    position: relative;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: underline;

    &:hover {
      background: yellow;
      color: black;
    }
  }
`;

export const Container = styled.div`
  & p {${p}};
  max-width: 80%;
  margin: 40px auto;
`;
