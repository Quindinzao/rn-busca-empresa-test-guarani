import styled from '@emotion/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundApp};
`;

export const Card = styled.View`
  height: 200px;
  width: 100%;
  display: flex;

  background-color: ${props => props.theme.colors.backgroundTextInput};
  padding: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderTextInput};
  border-style: solid;
`;
