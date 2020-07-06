import React, { useState, useContext } from 'react';

import { Container, Bold, TitleContainer, Title, TextBodyError, Header, Button1Container, Button1Text } from './styles'
import CardLink from '../CardLink/index';

export default function CardProximaEscala() {
  const [proximaEscala, setProximaEscala] = useState(true)
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Sua próxima escala</Title>
        </TitleContainer>
        <Button1Container>
          <Button1Text>Ver todas</Button1Text>
        </Button1Container>
      </Header>
      {proximaEscala ? <> 
        <CardLink>
          <Bold>02/10/2020</Bold>
        </CardLink>     
      </> : <> 
        <TextBodyError>Você não está em escalas futuras!</TextBodyError>
      </>}
          
    </Container>
  );
}