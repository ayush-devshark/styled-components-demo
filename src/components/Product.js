import React from 'react';
import styled, { css } from 'styled-components';

const Product = ({ name, price }) => {
    return (
        <Wrapper price={price}>
            <h4>{name}</h4>
            <p>{price}</p>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    width: 300px;
    background: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        text-transform: capitalize;
    }

    p {
        color: ${({ price }) => {
            if (price < 200) {
                return 'green';
            }
            if (price > 300) {
                return 'blue';
            }
            if (price > 200) {
                return 'yellow';
            }
        }};
    }
`;

export default Product;
