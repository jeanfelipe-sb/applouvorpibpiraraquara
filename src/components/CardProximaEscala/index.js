import React, { useState, useContext } from 'react';

import Moment from 'react-moment';
import { 
  Container,
  Bold,
  TitleContainer,
  Title,
  TextBodyError,
  Header,
  Button1Container,
  Button1Text,
  Icon,
  Card,
  CardBody,
  CardRight,
  CardRightTouch 
} from './styles'


export default function CardProximaEscala(props) {
  var escala = props.proximaEscala;
  return (
    <Container>
      {props.proximaEscala !== undefined ? <> 
        <Header>
          <TitleContainer>
            <Title>Sua próxima escala</Title>
          </TitleContainer>
          <Button1Container
            onPress={() => props.navigation.navigate('Escalas')}>
            <Button1Text>Ver todas</Button1Text>
          </Button1Container>
        </Header>
        <CardRightTouch onPress={() => props.navigation.navigate('ProximaEscala', {escala: {escala}})}>
          <Card>
            <CardBody>
              <Moment element={Bold} format="DD/MM/YYYY">
                {props.proximaEscala.data}
              </Moment>
            </CardBody>
            <CardRight>
              <Icon name="arrow-right"/>
            </CardRight>
          </Card>       
        </CardRightTouch>       
      </> : <> 
        <TextBodyError>Você não está em escalas futuras!</TextBodyError>
      </>}
          
    </Container>
  );
}