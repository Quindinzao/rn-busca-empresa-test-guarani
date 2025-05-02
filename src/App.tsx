import React from 'react';
// import Home from './screens/Home';
import { ThemeProvider } from './contexts/ThemeContexts';
import { NavigationContainer } from '@react-navigation/native';
// import { Wrapper } from './styles/global';
// import Header from './components/Header';
import Tabs from './routes/Tabs';

const App = (): React.JSX.Element => {
  // return (
  //   <ThemeProvider>
  //     <Wrapper>
  //       <Header title="Home" />
  //       <Home />
  //     </Wrapper>
  //   </ThemeProvider>
  // );
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );

};

export default App;
