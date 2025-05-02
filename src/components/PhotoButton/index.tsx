import React from 'react';
import { ImageIcon, ImageSelected, TouchableOpacityPhotoButton } from './styles';
import { useTheme } from '@emotion/react';

interface PhotoButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  image?: string | null;
}

const PhotoButton = ({onPress, disabled, image}: PhotoButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacityPhotoButton activeOpacity={0.7} disabled={disabled} onPress={onPress}>
      {image === null ?
        <ImageIcon
          source={theme.title === 'dark' ?
            require('../../assets/images/darkUser.png') :
            require('../../assets/images/lightUser.png')
          }
        /> :
        <ImageSelected source={{ uri: image }} />
      }
    </TouchableOpacityPhotoButton>
  );
};

export default PhotoButton;
