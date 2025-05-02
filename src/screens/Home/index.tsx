import React from 'react';
// import { Text } from 'react-native';
import { Container } from './styles';
import Text from '../../components/Text';

const Home = () : React.JSX.Element => {
  return (
    <Container>
      {/* <Text style={{fontFamily: 'Roboto-Bold', fontSize: 24}}>Whereas recognition of the inherent dignity</Text>
      <Text style={{fontSize: 24}}>Whereas recognition of the inherent dignity</Text> */}
      <Text fontSizeProp="large" fontFamilyProp="bold">Test</Text>
    </Container>
  );
};

export default Home;
