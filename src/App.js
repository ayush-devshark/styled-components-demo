import BasicTitle from './components/BasicTitle';
import { DefaultButton, WhiteButton } from './components/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem', backgroundColor: 'pink' }}>
            <BasicTitle special>styled components</BasicTitle>
            <BasicTitle>styled components</BasicTitle>
            <DefaultButton>Click Me</DefaultButton>
            <WhiteButton>Click Me</WhiteButton>
        </div>
    );
}

export default App;
