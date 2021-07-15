import styled from 'styled-components';

function App() {
    return (
        <div style={{ padding: '2rem', backgroundColor: 'pink' }}>
            <BasicTitle>styled components</BasicTitle>
            <button className='btn'>Click Me</button>
            <div style={{ padding: '2rem', backgroundColor: 'hotpink' }}></div>
        </div>
    );
}

const BasicTitle = styled.h1`
    text-transform: capitalize;
    text-align: center;
`;

export default App;
