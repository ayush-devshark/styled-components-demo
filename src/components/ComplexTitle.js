import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <div></div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h1 {
        text-transform: capitalize;
        text-align: center;
        color: #000;
    }

    div {
        width: 50px;
        height: 50px;
        background-color: red;
    }
`;

export default ComplexTitle;
