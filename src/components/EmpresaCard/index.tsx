// External Libraries
import React from 'react';
import { useTheme } from '@emotion/react';

// Types
import { Empresa } from '../../types/Empresa';

// Components
import Text from '../Text';

// Styles
import { Card, ImageContainer, StyledImage, Row, DefaultImage } from './styles';

const EmpresaCard = ({ item } : { item: Empresa }) => {
  const theme = useTheme();
  // const [cnpjSelected, setCnpjSelected] = useState<string>('');

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

export default EmpresaCard;
