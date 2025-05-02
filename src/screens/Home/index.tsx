import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { getEmpresas } from '../../service/database';
import Text from '../../components/Text';
import { Card } from './styles';
import Header from '../../components/Header';
import { Container, Wrapper } from '../../styles/global';

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

const Home = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const data = await getEmpresas();
        setEmpresas(data as Empresa[]);
      } catch (err) {
        console.error('Erro ao buscar empresas:', err);
      }
    };

    fetchEmpresas();
  }, []);

  const renderItem = ({ item }: { item: Empresa }) => (
    <Card>
      {item.imagem ? (
        <Image source={{ uri: item.imagem }} style={styles.image} />
      ) : null}
      <Text>{item.razao_social}</Text>
      <Text>{item.cnpj}</Text>
      <Text>{`${item.rua}, ${item.numero}, ${item.bairro}`}</Text>
      <Text>{`${item.municipio} - ${item.uf}, ${item.cep}`}</Text>
    </Card>
  );

  return (
    <Wrapper>
      <Header title="Empresas" />
      <Container>
        {empresas.length === 0 ?
          <Text fontFamilyProp="light">Nenhuma empresa cadastrada.</Text>
          :
          <FlatList
            data={empresas}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        }
      </Container>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'blue',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default Home;
