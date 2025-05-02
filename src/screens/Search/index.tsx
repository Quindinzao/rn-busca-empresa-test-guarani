import React from 'react';
// import { Text } from 'react-native';
import { Container } from './styles';
import Text from '../../components/Text';
import Header from '../../components/Header';

const Search = () : React.JSX.Element => {
  return (
    <Container>
      <Header title="Search" />
      <Text fontSizeProp="large" fontFamilyProp="bold">Search</Text>
    </Container>
  );
};

export default Search;
