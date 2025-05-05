// External Libraries
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

// Components
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import Button from '../../components/Button';
import PhotoButton from '../../components/PhotoButton';

// Services
import { createTable, insertEmpresa } from '../../services/database';

// Utils
import { maskCNPJ } from '../../utils/masks';
import { isValidCNPJ } from '../../utils/validators';
import { pickImage } from '../../utils/imagePicker';

// Styles
import { Container, Wrapper } from '../../styles/global';
import { Row, ScrollContent, SearchButton, StyledScrollView } from './styles';
import { useTheme } from '@emotion/react';

const AddCNPJ = (): React.JSX.Element => {
  const theme = useTheme();
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

  const [imageUri, setImageUri] = useState<string>('');

  const updateFormField = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const clearForm = () => {
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
    setImageUri('');
  };

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

  const handlePickImage = async () => {
    const uri = await pickImage();
    if (uri) {
      setImageUri(uri);
    }
  };

  const handleSave = async () => {
    if (!form.cnpj || !form.razaoSocial || !form.rua || !form.numero || !form.bairro || !form.municipio || !form.uf || !form.cep) {
      Alert.alert('Erro', 'Digite um CNPJ válido e existente e pressione o botão ao lado.');
      return;
    }
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
        imageUri,
      );
      clearForm();
      Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao salvar no banco de dados.');
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Header title="Adicionar CNPJ" />
      <StyledScrollView showsVerticalScrollIndicator={false}>
        <ScrollContent>
          <Container>
            <PhotoButton onPress={handlePickImage} image={imageUri} />
            <Row>
            <TextInput
              label="Digite o CNPJ e pressione o botão de retorno"
              placeholder="Digite o CNPJ da empresa"
              keyboardType="decimal-pad"
              onChangeText={t => updateFormField('cnpj', maskCNPJ(t))}
              value={form.cnpj}
              onSubmitEditing={() => fetchEmpresaFromAPI(form.cnpj)}
              spaceFilled={3}
            />
            <SearchButton onPress={() => fetchEmpresaFromAPI(form.cnpj)}>
              <FontAwesome6 name="magnifying-glass" size={24} iconStyle="solid" color={theme.colors.backgroundApp} />
            </SearchButton>

            </Row>
            <TextInput label="Razão Social" placeholder="Razão social da empresa" value={form.razaoSocial} editable={false} />
            <TextInput label="Bairro" placeholder="Nome do bairro" value={form.bairro} editable={false} />
            <Row>
              <TextInput spaceFilled={2} label="Rua" placeholder="Nome da rua ou avenida" value={form.rua} editable={false} />
              <TextInput spaceFilled={1} label="Número" placeholder="Número" keyboardType="decimal-pad" value={form.numero} editable={false} />
            </Row>
            <TextInput label="Município" placeholder="Município do CNPJ" value={form.municipio} editable={false} />
            <Row>
              <TextInput spaceFilled={1} label="UF" placeholder="UF" value={form.uf} editable={false} />
              <TextInput spaceFilled={2} label="CEP" placeholder="CEP de registro" keyboardType="decimal-pad" value={form.cep} editable={false} />
            </Row>
            <Button title="Registrar Empresa" onPress={handleSave} />
          </Container>
        </ScrollContent>
      </StyledScrollView>
    </Wrapper>
  );
};

export default AddCNPJ;
