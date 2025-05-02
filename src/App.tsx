import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { ThemeProvider } from './contexts/ThemeContexts';
import Tabs from './routes/Tabs';

const App = (): React.JSX.Element => {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
