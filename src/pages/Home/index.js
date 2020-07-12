import React, { useState, useContext } from 'react';
import CardProximaEscala from '../../components/CardProximaEscala/index';
import UltimosAvisos from '../../components/UltimosAvisos/index';
import HeaderHome from '../../components/HeaderHome/index';

import { Container, Wrapper, UserNameText } from './styles'

export default function Home() {
      
  return (
    <Wrapper>
      <Container>
        <HeaderHome/>
        <UltimosAvisos/>
        <CardProximaEscala/>
      </Container>
    </Wrapper>
  );
}