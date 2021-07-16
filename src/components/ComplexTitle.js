import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
    return (
        <Wrapper className='bg-grey'>
            <h1>{title}</h1>
            <div className='underline'></div>
            <div className='box'></div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h1 {
        text-transform: capitalize;
        text-align: center;
        color: #000;
    }

    .underline {
        width: 50px;
        height: 50px;
        background-color: var(--primary);
    }

    .box {
        height: 10px;
        border: var(--mainBorder);
    }
`;

export default ComplexTitle;
