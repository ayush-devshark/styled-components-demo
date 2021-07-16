import React from 'react';
import styled from 'styled-components';
import Title from './ComplexTitle';
import Product from './Product';

const products = [
    { id: '1', name: 'Chair', price: 150 },
    { id: '2', name: 'Chair + Table', price: 250 },
    { id: '3', name: 'Chair + TV + Couch', price: 550 },
];

const Products = () => {
    return (
        <section>
            <Title title='all products'> </Title>
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </section>
    );
};

export default Products;
