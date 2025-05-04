// External Libraries
import React from 'react';

// Components
import ToggleThemeSwitch from '../ToggleThemeSwitch';
import Text from '../Text';

// Styles
import { Container, Content } from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({title} : HeaderProps) => {
  return (
    <Container>
      <Content>
        <Text fontFamilyProp="regular" fontSizeProp="medium">{title}</Text>
        <ToggleThemeSwitch />
      </Content>
    </Container>
  );
};

export default Header;
