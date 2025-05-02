/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Container, Wrapper } from '../../styles/global';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import { ScrollView } from 'react-native';
import { Row } from './styles';

const AddCNPJ = () : React.JSX.Element => {
  return (
    <Wrapper>
      <Header title="Adicionar CNPJ" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} style={{ flex: 1, width: '100%' }}>
        <Container>
          <TextInput label="CNPJ" placeholder="Digite o CNPJ da empres" keyboardType="decimal-pad"/>
          <TextInput label="Razão Social" placeholder="Digite a razão social"/>
          <Row>
            <TextInput spaceFilled={2} label="Logradouro" placeholder="Digite o nome da rua ou avenida"/>
            <TextInput spaceFilled={1} label="Número" placeholder="Digite o número do endereço"/>
          </Row>
          <TextInput label="Bairro" placeholder="Digite o bairro"/>
          <TextInput label="Município" placeholder="Digite o município"/>
          <Row>
            <TextInput spaceFilled={1} label="UF" placeholder="Digite a sigla do estado (UF)"/>
            <TextInput spaceFilled={2} label="CEP" placeholder="Digite o CEP"/>
          </Row>
        </Container>
      </ScrollView>
    </Wrapper>
  );
};

export default AddCNPJ;
