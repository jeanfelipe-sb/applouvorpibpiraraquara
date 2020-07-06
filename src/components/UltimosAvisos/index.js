import React, { useState, useContext } from 'react';
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

export default function UltimosAvisos() {
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
            <Card>      
              <TitleCard>29/11/2020</TitleCard> 
              <BodyCard>
                <TextBodyCard numberOfLines={5}>Cancelamento do ensaio do louvor do culto de batismo, no sábado um dia antes do  </TextBodyCard>
              </BodyCard>
              <FootherCard>      
                <Icon name="arrow-right"/>        
              </FootherCard>
            </Card>
            <Card>      
              <TitleCard>29/11/2020</TitleCard> 
              <BodyCard>
                <TextBodyCard numberOfLines={5}>Cancelamento do ensaio  </TextBodyCard>
              </BodyCard>
              <FootherCard>      
                <Icon name="arrow-right"/>        
              </FootherCard>
            </Card>
            <Card>      
              <TitleCard>29/11/2020</TitleCard> 
              <BodyCard>
                <TextBodyCard numberOfLines={5}>Cancelamento do ensaio do louvor do culto de batismo, no sábado um dia antes do  </TextBodyCard>
              </BodyCard>
              <FootherCard>      
                <Icon name="arrow-right"/>        
              </FootherCard>
            </Card>
            <Card>      
              <TitleCard>29/11/2020</TitleCard> 
              <BodyCard>
                <TextBodyCard numberOfLines={5}>Cancelamento do ensaio do louvor do culto de batismo, no sábado um dia antes do  </TextBodyCard>
              </BodyCard>
              <FootherCard>      
                <Icon name="arrow-right"/>        
              </FootherCard>
            </Card>
          </CardsContainer>
        </> : <> 
          <BodyError>
            <TextBodyError>Não há novos avisos!</TextBodyError>
          </BodyError>
        </>}
    </Container>
  );
}