import styled from 'styled-components';
import Loading from './components/Loading';
import { DefaultButton } from './components/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <DefaultButton>Click Me!</DefaultButton>
            <DefaultButton
                as='a'
                href='https://www.a11yproject.com/#explore-resources'
            >
                Click Me!
            </DefaultButton>
            <DefaultButton>Click Me!</DefaultButton>
        </div>
    );
}

export default App;
