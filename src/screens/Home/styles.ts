import styled from '@emotion/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundApp};
`;
