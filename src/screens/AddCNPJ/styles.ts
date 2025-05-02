import styled from '@emotion/native';

export const ScrollViewForm = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundApp};
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
