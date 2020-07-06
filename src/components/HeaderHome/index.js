import React, { useState, useContext } from 'react';
import LogoSrc from '../../images/logo-pib-piraquara.png';

import { Container, Header, LogoContainer, Logo, HeaderText } from './styles'

export default function HeaderHome() {
  return (
    <Container>
      <Header>
        <HeaderText>Olá, Jean Felipe!</HeaderText>
      </Header>
      <LogoContainer>
        <Logo
          source={LogoSrc}
        />
      </LogoContainer>
    </Container>  
  );
}