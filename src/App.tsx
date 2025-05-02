import React from 'react';
import { ThemeProvider } from './contexts/ThemeContexts';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './routes/Tabs';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );

};

export default App;
