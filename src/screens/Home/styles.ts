// External Libraries
import styled from '@emotion/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundApp};
`;

export const List = styled.FlatList({
  width: '100%',
});
