import styled from 'styled-components';
import { colors } from '../utils';

const AlterNativeTitle = ({ title, className }) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <div></div>
        </div>
    );
};

const Wrapper = styled(AlterNativeTitle)`
    h1 {
        text-transform: capitalize;
        text-align: center;
        color: #000;
    }

    div {
        width: 50px;
        height: 50px;
        background-color: ${colors.secondary};
    }
`;

export default Wrapper;
