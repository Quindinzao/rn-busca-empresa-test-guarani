// External Libraries
import React from 'react';
import { useTheme } from '@emotion/react';

// Components
import Text from '../Text';

// Styles
import { Container, ImageIcon, ImageSelected, TouchableOpacityPhotoButton } from './styles';

interface PhotoButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  image?: string;
}

const PhotoButton = ({onPress, disabled, image}: PhotoButtonProps) => {
  const theme = useTheme();

  return (
    <Container>
      <TouchableOpacityPhotoButton activeOpacity={0.7} disabled={disabled} onPress={onPress}>
        {image === '' ?
          <ImageIcon
            source={theme.title === 'dark' ?
              require('../../assets/images/darkUser.png') :
              require('../../assets/images/lightUser.png')
            }
          /> :
          <ImageSelected source={{ uri: image }} />
        }
      </TouchableOpacityPhotoButton>
      {image === '' && <Text fontSizeProp="small">Carregue uma imagem</Text>}
    </Container>
  );
};

export default PhotoButton;
