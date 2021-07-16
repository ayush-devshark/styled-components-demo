import React from 'react';
import styled, { css } from 'styled-components/macro';

const Button = styled.button.attrs(props => {
    return { type: props.type || 'button' };
})`
    background: var(--primary);
    border: none;
    color: #fff;
    padding: 0.25rem;
    cursor: pointer;
    ${({ type }) =>
        type === 'submit' &&
        css`
            background: blue;
            display: block;
            width: 100%;
            margin-top: 1rem;
        `}
`;

const BasicInput = styled.input.attrs(props => {
    return {
        type: props.type || 'text',
        placeholder: props.placeholder || 'Please enter value',
    };
})`
    box-sizing: border-box;
    padding: 0.5rem;
    border: 2px solid #f2f4f8;
    border-radius: 2.5rem;
    margin-top: 1rem;
`;

const Form = () => {
    return (
        <>
            <Button>Click me</Button>
            <form
                action=''
                css={`
                    width: 300px;
                    background: #fff;
                    padding: 2rem;
                    margin-top: 1rem;
                `}
            >
                <h2>Form </h2>
                <BasicInput />
                <BasicInput type='password' placeholder='Enter Password' />
                <BasicInput type='email' placeholder='Enter Email' />
                <Button type='submit'>Submit here</Button>
            </form>
        </>
    );
};

export default Form;
