import React, { useContext } from 'react';
import LogoSrc from '../../images/logo-pib-piraquara.png';
import AuthContext from '../../contexts/auth';

import { Container, Header, LogoContainer, Logo, HeaderText } from './styles'

export default function HeaderHome() {
  const {user} = useContext(AuthContext);
  return (
    <Container>
      <Header>
        <HeaderText>Olá, {user.name}!</HeaderText>
      </Header>
      <LogoContainer>
        <Logo
          source={LogoSrc}
        />
      </LogoContainer>
    </Container>  
  );
}