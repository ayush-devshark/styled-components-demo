import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './global-styles';
import { DefaultButton } from './components/Buttons';

const BaseTheme = {
    color: '#222',
    background: '#fff',
};
const DarkTheme = {
    color: '#fff',
    background: '#222',
};

const Container = styled.div`
    padding: 2rem;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
`;

function App() {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    return (
        <ThemeProvider theme={theme ? BaseTheme : DarkTheme}>
            <GlobalStyle />
            <Container>
                <h1>hello world</h1>
                <DefaultButton onClick={toggleTheme}>toggle me</DefaultButton>
            </Container>
        </ThemeProvider>
    );
}

export default App;
