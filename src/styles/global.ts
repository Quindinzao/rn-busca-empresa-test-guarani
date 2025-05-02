import styled from '@emotion/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundApp};
`;

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-right: ${props => props.theme.spacing.md + 'px'};
  padding-left: ${props => props.theme.spacing.md + 'px'};
`;
