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
import { maskCNPJ } from '../../utils/masks';
import { isValidCNPJ } from '../../utils/validators';

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

  const fetchEmpresaFromAPI = async (cnpj: string) => {
    const sanitizedCnpj = cnpj.replace(/\D/g, '');

    try {
      const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${sanitizedCnpj}`);
      const data = await response.json();

      if (data.status === 'ERROR') {
        Alert.alert('Erro', data.message || 'Erro ao consultar CNPJ');
        return;
      }

      setForm({
        cnpj: maskCNPJ(data.cnpj),
        razaoSocial: data.nome || '',
        bairro: data.bairro || '',
        rua: data.logradouro || '',
        numero: data.numero || '',
        municipio: data.municipio || '',
        uf: data.uf || '',
        cep: data.cep || '',
      });

      Alert.alert('Sucesso', 'Dados preenchidos automaticamente!');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar dados da empresa.');
      console.error(error);
    }
  };

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
    if (!isValidCNPJ(form.cnpj)) {
      Alert.alert('Erro', 'CNPJ inválido.');
      return;
    }

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
      setForm({
        cnpj: '',
        razaoSocial: '',
        bairro: '',
        rua: '',
        numero: '',
        municipio: '',
        uf: '',
        cep: '',
      });
      Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao salvar no banco de dados.');
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Header title="Adicionar CNPJ" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} style={{ flex: 1, width: '100%' }}>
        <Container>
          <PhotoButton onPress={handlePickImage} image={imageUri} />
          <TextInput
            label="CNPJ"
            placeholder="Digite o CNPJ da empresa"
            keyboardType="decimal-pad"
            onChangeText={t => handleChange('cnpj', maskCNPJ(t))}
            value={form.cnpj}
            onBlur={() => fetchEmpresaFromAPI(form.cnpj)}
          />
          <TextInput
            label="Razão Social"
            placeholder="Razão social da empresa"
            value={form.razaoSocial}
            editable={false}
          />
          <TextInput
            label="Bairro"
            placeholder="Nome do bairro"
            value={form.bairro}
            editable={false}
          />
          <Row>
            <TextInput
              spaceFilled={2}
              label="Rua"
              placeholder="Nome da rua ou avenida"
              value={form.rua}
              editable={false}
            />
            <TextInput
              spaceFilled={1}
              label="Número"
              placeholder="Número"
              keyboardType="decimal-pad"
              value={form.numero}
              editable={false}
            />
          </Row>
          <TextInput
            label="Município"
            placeholder="Município do CNPJ"
            value={form.municipio}
            editable={false}
          />
          <Row>
            <TextInput
              spaceFilled={1}
              label="UF"
              placeholder="UF"
              value={form.uf}
            />
            <TextInput
              spaceFilled={2}
              label="CEP"
              placeholder="CEP de registro"
              keyboardType="decimal-pad"
              value={form.cep}
            />
          </Row>
          <Button title="Registrar Empresa" onPress={handleSave} />
        </Container>
      </ScrollView>
    </Wrapper>
  );
};

export default AddCNPJ;
