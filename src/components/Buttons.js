import styled from 'styled-components';

export const DefaultButton = styled.button`
    background-color: #6e2d45;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    padding: 0.5rem;
    display: block;
    width: 200px;
    margin: 1rem auto;
`;

export const WhiteButton = styled(DefaultButton)`
    background-color: #fff;
    color: #000;
`;
