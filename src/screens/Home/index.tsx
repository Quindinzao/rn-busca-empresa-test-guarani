import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

const Home = () : React.JSX.Element => {
  return (
    <Container>
      <Text style={{fontFamily: 'LatoRegular', fontSize: 24}}>Hello Home!</Text>
    </Container>
  );
};

export default Home;
