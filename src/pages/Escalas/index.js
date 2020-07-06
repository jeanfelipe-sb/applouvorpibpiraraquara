import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth';
import api from '../../services/api';

import PanelCollapse from '../../components/PanelCollapse/index';
import { Container, Header, Wrapper, UserNameText } from './styles'

export default function Escalas() {
  const { signOut } = useContext(AuthContext);
    
  return (   
    <Wrapper>
      <Container>
        <Header>
          <UserNameText>Escalas</UserNameText>
        </Header>
        <PanelCollapse title="MÚSICAS">
          <UserNameText>Escalas</UserNameText>
        </PanelCollapse> 
      </Container>
    </Wrapper>
  );
}