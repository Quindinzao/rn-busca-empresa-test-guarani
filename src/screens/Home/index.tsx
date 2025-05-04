/* eslint-disable react-native/no-inline-styles */
// External Libraries
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// Services
import { deleteEmpresa, getEmpresas } from '../../services/database';

// Types
import { EmpresaProps } from '../../interfaces/Empresa';

// Components
import Text from '../../components/Text';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import EmpresaCard from '../../components/EmpresaCard';

// Styles
import { Container, Wrapper } from '../../styles/global';
import { List } from './styles';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allEmpresas, setAllEmpresas] = useState<EmpresaProps[]>([]);
  const [empresas, setEmpresas] = useState<EmpresaProps[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchEmpresas = async () => {
        try {
          const data = await getEmpresas();
          setAllEmpresas(data as EmpresaProps[]);
          setEmpresas(data as EmpresaProps[]);
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
