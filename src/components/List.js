import React from 'react';
import styled, { css } from 'styled-components';

const fruits = ['🍎', '🍊', '🍑', '🥝'];

const Fruit = styled.li`
    list-style-type: none;
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    width: 40%;
    margin: 0 auto;
    ${({ odd }) =>
        odd
            ? css`
                  background: yellow;
              `
            : css`
                  background: lime;
              `};
`;

const List = () => {
    return (
        <ul>
            {fruits.map((el, i) => (
                <Fruit key={i} odd={(i + 1) % 2 !== 0}>
                    {el}
                </Fruit>
            ))}
        </ul>
    );
};

export default List;
