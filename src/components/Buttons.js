import styled from 'styled-components';

export const DefaultButton = styled.button`
    background-color: #6e2d45;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    padding: 1rem;
    display: block;
    width: 150px;
    margin-right: 1rem;
    display: inline-block;

    text-decoration: none;
    text-align: center;
    font-size: 1rem;
`;

export const WhiteButton = styled(DefaultButton)`
    background-color: #fff;
    color: #000;
`;
