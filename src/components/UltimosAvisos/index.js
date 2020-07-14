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
  const [ultimosAvisos, setUltimosAvisos] = useState(true)
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Últimos Avisos</Title>
        </TitleContainer>
        <Button1Container>
          <Button1Text>Ver todas</Button1Text>
        </Button1Container>
      </Header>
        {ultimosAvisos ? <> 
          <CardsContainer>
          {props.avisos.map((aviso) =>
            <Card key={aviso.id}>     
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