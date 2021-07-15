import React from 'react';
import styled from 'styled-components';

const Random = () => {
    return (
        <div>
            <div className='underline'></div>
        </div>
    );
};

const Wrapper = styled.div`
    .underline {
        width: 100px;
        height: 100px;
        background-color: lightgreen;
    }
`;

export default Random;
