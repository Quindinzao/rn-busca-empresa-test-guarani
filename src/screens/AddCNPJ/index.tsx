/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Container, Wrapper } from '../../styles/global';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import { Alert, ScrollView } from 'react-native';
import { Row } from './styles';
import Button from '../../components/Button';
import { createTable, insertEmpresa } from '../../service/database';
import { pickImage } from '../../utils/imagePicker';
import PhotoButton from '../../components/PhotoButton';

const AddCNPJ = () : React.JSX.Element => {
  const [form, setForm] = useState({
    cnpj: '',
    razaoSocial: '',
    bairro: '',
    rua: '',
    numero: '',
    municipio: '',
    uf: '',
    cep: '',
  });

  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    createTable();
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handlePickImage = async () => {
    const uri = await pickImage();
    if (uri) {
      setImageUri(uri);
    }
  };

  const handleSave = async () => {
    try {
      await insertEmpresa(
        form.cnpj,
        form.razaoSocial,
        form.rua,
        form.numero,
        form.bairro,
        form.municipio,
        form.uf,
        form.cep,
        imageUri || ''
      );
      Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao salvar no banco de dados.');
      console.error(err);
    }
  };

  useEffect(() => {
    Alert.alert('Imagem selecionada', imageUri || 'Nenhuma imagem selecionada');
  }, [imageUri]);

  return (
    <Wrapper>
      <Header title="Adicionar CNPJ" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} style={{ flex: 1, width: '100%' }}>
        <Container>
          <PhotoButton onPress={handlePickImage} image={imageUri} />
          <TextInput label="CNPJ" placeholder="Digite o CNPJ da empres" keyboardType="decimal-pad" onChangeText={t => handleChange('cnpj', t)} />
          <TextInput label="Razão Social" placeholder="Digite a razão social" onChangeText={t => handleChange('razaoSocial', t)} />
          <TextInput label="Bairro" placeholder="Digite o bairro" onChangeText={t => handleChange('bairro', t)} />
          <Row>
            <TextInput spaceFilled={2} label="Rua" placeholder="Nome da rua ou avenida" onChangeText={t => handleChange('rua', t)} />
            <TextInput spaceFilled={1} label="Número" placeholder="Número" onChangeText={t => handleChange('numero', t)} />
          </Row>
          <TextInput label="Município" placeholder="Digite o município" onChangeText={t => handleChange('municipio', t)} />
          <Row>
            <TextInput spaceFilled={1} label="UF" placeholder="Ex: SP" onChangeText={t => handleChange('uf', t)} />
            <TextInput spaceFilled={2} label="CEP" placeholder="Digite o CEP" onChangeText={t => handleChange('cep', t)} />
          </Row>
          <Button title="Registrar Empresa" onPress={handleSave} />
        </Container>
      </ScrollView>
    </Wrapper>
  );
};

export default AddCNPJ;
