import styled, { css } from 'styled-components';

export const DefaultButton = styled.button`
    background-color: #6e2d45;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    width: 150px;
    margin-right: 1rem;
    display: inline-block;

    ${({ large }) =>
        large
            ? css`
                  padding: 1rem;
                  font-size: 1.5rem;
                  font-weight: 700;
              `
            : css`
                  padding: 0.5rem;
                  font-size: 1rem;
                  font-weight: 400;
              `}

    text-decoration: none;
    text-align: center;
`;

export const WhiteButton = styled(DefaultButton)`
    background-color: #fff;
    color: #000;
`;
