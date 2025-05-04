// External Libraries
import styled from '@emotion/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.backgroundApp};
  height: 64px;
  width: 100%;

  padding: 0 16px;

  border-bottom-width: 1.5px;
  border-bottom-color: ${props => props.theme.colors.borderTextInput};
  border-bottom-style: solid;
`;

export const Content = styled.SafeAreaView`
  height: 64px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;

  padding: 0 16px;
`;
