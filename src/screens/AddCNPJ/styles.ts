// External Libraries
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
  position: relative;
`;

export const SearchButton = styled.TouchableOpacity`
  border-radius: ${props => props.theme.borderRadius.small + 'px'};
  background-color: ${props => props.theme.colors.primary};
  padding: 8px;
  margin-bottom: 4px;
  position: absolute;
  right: 10px;
`;

export const StyledScrollView = styled.ScrollView({
  flex: 1,
  width: '100%',
  paddingTop: 8,
});

export const ScrollContent = styled.View({
  paddingBottom: 20,
});
