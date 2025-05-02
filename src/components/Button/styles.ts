import styled from '@emotion/native';

export const TouchableOpacityButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.backgroundButton};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
  border-radius: ${props => props.theme.borderRadius.small + 'px'};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  font-family: ${props => props.theme.typography.fontFamily.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.buttonTextColor};
`;
