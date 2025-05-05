/* eslint-disable react-native/no-inline-styles */
// External Libraries
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
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
      fetchEmpresas();
    }, [])
  );

  const fetchEmpresas = async () => {
    try {
      const data = await getEmpresas();
      setAllEmpresas(data as EmpresaProps[]);
      setEmpresas(data as EmpresaProps[]);
    } catch (err) {
      console.error('Erro ao buscar empresas:', err);
    }
  };

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

  const handleOpenDeleteModal = async (cnpjToDelete: string) => {
    if (cnpjToDelete === '') {
      Alert.alert('Erro', 'CNPJ inválido.');
      return;
    }

    Alert.alert('Deletar empres', 'Tem certeza de que deseja deletar essa empresá?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleDelete(cnpjToDelete)},
    ]);
  };

  const handleDelete = async (cnpjToDelete: string) => {
    try {
      await deleteEmpresa(cnpjToDelete);
      fetchEmpresas();
      Alert.alert('Sucesso', 'Empresa deletada com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao deletar empresa.');
      console.error(err);
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
              renderItem={({ item }: { item: any }) => (
                <EmpresaCard
                  item={item}
                  handleDelete={() => handleOpenDeleteModal(item.cnpj)}
                />
              )}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}
            />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
