import React from 'react';
import Home from './screens/Home';
import { ThemeProvider } from './contexts/ThemeContexts';
import { Wrapper } from './styles/global';
import Header from './components/Header';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header title="Home" />
        <Home />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
