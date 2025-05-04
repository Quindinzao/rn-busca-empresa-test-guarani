// External Libraries
import styled from '@emotion/native';

export const TouchableOpacityPhotoButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  width: 156px;
  height: 156px;
  border-radius: ${props => props.theme.borderRadius.medium + 'px'};
`;

export const ImageSelected = styled.Image`
  height: 125px; 
  width: 125px; 
  border-radius: ${props => props.theme.borderRadius.medium + 'px'};
`;

export const ImageIcon = styled.Image`
  height: 84px; 
  width: 84px;
`;
