import styled from 'styled-components';

export const Container = styled.div `
    max-width: 80%;
    margin: 0 auto;
`;

export const Cities = styled.div `
display: grid;
list-style: none;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 3em;
justify-items: center;
`;
