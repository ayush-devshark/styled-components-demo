import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
    return (
        <Wrapper className='bg-grey'>
            <h1>{title}</h1>
            <div className='underline'></div>
            <h2 className='title'>random</h2>
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
        background-color: red;
    }
`;

export default ComplexTitle;
