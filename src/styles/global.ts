import styled from '@emotion/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${props => props.theme.spacing.md}px;
  padding-left: ${props => props.theme.spacing.md}px;
  background-color: ${props => props.theme.colors.backgroundApp};
`;
