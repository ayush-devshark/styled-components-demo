import styled from 'styled-components/macro';
import { DefaultButton } from './components/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <DefaultButton>Click Me!</DefaultButton>
            <DefaultButton
                css={`
                    color: red;
                `}
                as='a'
                href='https://www.a11yproject.com/#explore-resources'
            >
                Click Me!
            </DefaultButton>
            <DefaultButton>Click Me!</DefaultButton>
            <div
                css={`
                    color: green;
                `}
            >
                <h2>Hello World</h2>
            </div>
        </div>
    );
}

export default App;
