import styled from 'styled-components/macro';
import { WhiteButton } from './components/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <WhiteButton>Click me</WhiteButton>
            <WhiteButton large>Click me</WhiteButton>
        </div>
    );
}

export default App;
