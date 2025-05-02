import React from 'react';
import { Container, Content } from './styles';
import ToggleThemeSwitch from '../ToggleThemeSwitch';
import Text from '../Text';

interface HeaderProps {
  title: string;
}

const Header = ({title} : HeaderProps) => {
  return (
    <Container>
      <Content>
        <Text fontFamilyProp="light" fontSizeProp="medium">{title}</Text>
        <ToggleThemeSwitch />
      </Content>
    </Container>
  );
};

export default Header;
