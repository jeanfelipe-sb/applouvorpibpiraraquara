import React from 'react';
import Moment from 'react-moment';

import { Container, ViewTitle, Title, BodyText, HeaderText } from './styles'

export default function AvisoDetalhes({ route, navigation }) {       
  const { aviso } = route.params;   
  return (
    <Container>
      <Moment element={HeaderText} format="DD/MM/YYYY">
        {aviso.created_at}
      </Moment>     
      <ViewTitle>              
        <Title>{aviso.titulo}</Title>
      </ViewTitle>      
      <BodyText>{aviso.conteudo}</BodyText>
    </Container>
  );
}