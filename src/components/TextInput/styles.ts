// External Libraries
import styled from '@emotion/native';

interface ContainerTextInputProps {
  spaceFilled?: 1 | 2 | 3;
}

export const ContainerTextInput = styled.View<ContainerTextInputProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${props => props.spaceFilled === 1 ? '30%' : props.spaceFilled === 2 ? '63%' : '100%'};
  margin-bottom: 12px;
`;

export const RNTextInput = styled.TextInput`
  width: 100%;
  height: 54px;
  border-radius: ${props => props.theme.borderRadius.small + 'px'};
  background-color: ${props => props.theme.colors.backgroundTextInput};
  padding: 0 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${props => props.theme.colors.color};
`;
