import React from 'react';
import { Container, Content } from './styles';
import ToggleThemeSwitch from '../ToggleThemeSwitch';


const Header = () => {
  return (
    <Container>
      <Content>
      <ToggleThemeSwitch />
      </Content>
    </Container>
  );
};

export default Header;
