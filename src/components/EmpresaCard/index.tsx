// External Libraries
import React from 'react';
import { useTheme } from '@emotion/react';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

// Interfaces
import { EmpresaProps } from '../../interfaces/Empresa';

// Components
import Text from '../Text';

// Styles
import {
  Card,
  ImageContainer,
  StyledImage,
  Row,
  DefaultImage,
  DeleteButton,
} from './styles';

interface EmpresaCardProps {
  item: EmpresaProps;
  handleDelete: () => void;
}

const EmpresaCard = ({ item, handleDelete }: EmpresaCardProps) => {
  const theme = useTheme();

  return (
    <Card>
      <DeleteButton activeOpacity={0.7} onPress={handleDelete}>
        <FontAwesome6
          name="trash"
          color={theme.colors.error}
          size={20}
          iconStyle="solid"
        />
      </DeleteButton>

      {item.imagem !== '' ? (
        <StyledImage source={{ uri: item.imagem }} />
      ) : (
        <ImageContainer>
          <DefaultImage
            source={
              theme.title === 'dark'
                ? require('../../assets/images/lightUser.png')
                : require('../../assets/images/darkUser.png')
            }
          />
        </ImageContainer>
      )}

      <Row>
        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail">
          <Text fontSizeProp="small" fontFamilyProp="bold">CNPJ: </Text>
          {item.cnpj}
        </Text>
      </Row>
      <Row>
        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail">
          <Text fontSizeProp="small" fontFamilyProp="bold">Cidade: </Text>
          {`${item.municipio} - ${item.uf}, ${item.cep}`}
        </Text>
      </Row>
      <Row>
        <Text fontSizeProp="small" numberOfLines={2} ellipsizeMode="tail">
          <Text fontSizeProp="small" fontFamilyProp="bold">Endereço: </Text>
          {`${item.rua}, ${item.numero}, ${item.bairro}`}
        </Text>
      </Row>
    </Card>
  );
};

export default EmpresaCard;
