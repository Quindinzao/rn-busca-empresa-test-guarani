// External Libraries
import styled from '@emotion/native';

export const Card = styled.View`
  max-height: 400px;
  width: 100%;
  display: flex;

  background-color: ${props => props.theme.colors.backgroundTextInput};
  padding: 32px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderTextInput};
  border-style: solid;

  margin-bottom: ${props => props.theme.spacing.lg + 'px'};

  position: relative;
`;

export const ImageContainer = styled.View`
  width: 100%;
  max-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;flex-wrap: wrap;
  margin-top: ${props => props.theme.spacing.sm + 'px'};
`;

export const DefaultImage = styled.Image({
  width: 84,
  height: 84,
});

export const StyledImage = styled.Image({
  width: '100%',
  height: 150,
  borderRadius: 8,
  marginBottom: 8,
});
