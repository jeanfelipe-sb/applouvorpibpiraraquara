import React, { useState } from 'react';
import Moment from 'react-moment';
import { 
  Container,
  TextBodyError, 
  BodyError, 
  Header, 
  TitleContainer, 
  Title, 
  Button1Container, 
  Button1Text,
  CardsContainer,
  Card,
  TitleCard,
  BodyCard,
  TextBodyCard,
  FootherCard,
  Icon
} from './styles'

export default function UltimosAvisos(props) {
  return (
    <Container>
      {(props.avisos.length > 0) ? <> 
        <Header>
          <TitleContainer>
            <Title>Últimos Avisos</Title>
          </TitleContainer>
          <Button1Container onPress={() => props.navigation.navigate('Avisos')}>
            <Button1Text>Ver todas</Button1Text>
          </Button1Container>
        </Header>
        <CardsContainer>
        {props.avisos.map((aviso) =>
          <Card key={aviso.id}
            onPress={() => props.navigation.navigate('AvisoDetalhes', {aviso: aviso})}>     
            <Moment element={TitleCard} format="DD/MM/YYYY">
              {aviso.created_at}
            </Moment>    
            <BodyCard>
              <TextBodyCard numberOfLines={5}>{aviso.titulo}</TextBodyCard>
            </BodyCard>
            <FootherCard>      
              <Icon name="arrow-right"/>        
            </FootherCard>
          </Card>
        )}
        </CardsContainer>
      </> : <> 
      <BodyError>
        <TextBodyError>Não há novos avisos!</TextBodyError>
      </BodyError>
    </>}
    </Container>
  );
}