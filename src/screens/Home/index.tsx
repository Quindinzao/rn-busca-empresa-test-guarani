/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { getEmpresas } from '../../service/database';
import Text from '../../components/Text';
import { Card, DefaultImage, ImageContainer, List, Row, StyledImage } from './styles';
import Header from '../../components/Header';
import { Container, Wrapper } from '../../styles/global';
import { useTheme } from '@emotion/react';
import TextInput from '../../components/TextInput';

type Empresa = {
  id: number;
  cnpj: string;
  razao_social: string;
  rua: string;
  numero: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  imagem: string;
};

const EmpresaCard = ({ item } : { item: Empresa }) => {
  const theme = useTheme();
  return (
    <Card>
      {item.imagem !== '' ?
        <StyledImage source={{ uri: item.imagem }} />
        :
        <ImageContainer>
          <DefaultImage
            source={
              theme.title === 'dark' ?
                require('../../assets/images/lightUser.png') :
                require('../../assets/images/darkUser.png')
            }
          />
        </ImageContainer>
      }
      <Row>

        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail"><Text fontSizeProp="small" fontFamilyProp="bold">CNPJ: </Text>{item.cnpj}</Text>
      </Row>
      <Row>
        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail">
        <Text fontSizeProp="small" fontFamilyProp="bold">Cidade: </Text>{`${item.municipio} - ${item.uf}, ${item.cep}`}</Text>
      </Row>
      <Row>
        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail">
        <Text fontSizeProp="small" fontFamilyProp="bold">Endereço: </Text>{`${item.rua}, ${item.numero}, ${item.bairro}`}</Text>
      </Row>
      <Row>
        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail">
        <Text fontSizeProp="small" fontFamilyProp="bold">Cidade: </Text>{`${item.municipio} - ${item.uf}, ${item.cep}`}</Text>
      </Row>
    </Card>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allEmpresas, setAllEmpresas] = useState<Empresa[]>([]);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchEmpresas = async () => {
        try {
          const data = await getEmpresas();
          setAllEmpresas(data as Empresa[]);
          setEmpresas(data as Empresa[]);
        } catch (err) {
          console.error('Erro ao buscar empresas:', err);
        }
      };

      fetchEmpresas();
    }, [])
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);

    if (text.trim() === '') {
      setEmpresas(allEmpresas);
    } else {
      const filtered = allEmpresas.filter((empresa) =>
        empresa.cnpj.includes(text)
      );
      setEmpresas(filtered);
    }
  };

  return (
    <Wrapper>
      <Header title="Empresas" />
      <Container>
        {empresas.length === 0 ? (
          <Text fontFamilyProp="light">Nenhuma empresa cadastrada.</Text>
        ) : (
          <>
            <TextInput
              label=""
              placeholder="Pesquisar por CNPJ"
              value={searchTerm}
              onChangeText={handleSearch}
            />
            <List
              data={empresas}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item } : any) => <EmpresaCard item={item} />}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}
            />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
