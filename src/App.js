import BasicTitle from './components/BasicTitle';
import { DefaultButton } from './components/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem', backgroundColor: 'pink' }}>
            <BasicTitle>styled components</BasicTitle>
            <DefaultButton>Click Me</DefaultButton>
        </div>
    );
}

export default App;
