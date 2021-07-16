import styled from 'styled-components';
import { colors, setupBorder } from '../utils';

const AlterNativeTitle = ({ title, className }) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <div className='underline'></div>
            <div className='box'></div>
        </div>
    );
};

const Wrapper = styled(AlterNativeTitle)`
    h1 {
        text-transform: capitalize;
        text-align: center;
        color: #000;
    }

    .underline {
        width: 50px;
        height: 50px;
        background-color: ${colors.secondary};
    }

    .box {
        height: 10px;
        border: ${setupBorder({ width: 10, color: 'green' })};
    }
`;

export default Wrapper;
