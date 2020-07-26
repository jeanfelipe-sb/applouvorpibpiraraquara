import React from 'react';
import Moment from 'react-moment';
import ItemMusica from '../../components/ItemMusica/index';

import { Container, RowTitle, Header, HeaderBody, Title, TitleDanger, BodyScroll, Body, BodyText, Item, Card } from './styles'

export default function EscalaDetalhes({ route, navigation }) {     
  const { escala } = route.params.escala; 
  return (
    <Container>
      <Header>
        <Moment element={Title} format="DD/MM/YYYY">
          {escala.data}
        </Moment> 
        <Title size="18px">{escala.nome}</Title>
        <RowTitle>
          {escala.data_ensaio  ? <> 
            <TitleDanger>Ensiao no dia </TitleDanger>
            <Moment element={TitleDanger} format="DD/MM/YYYY - H:mm">
              {escala.data_ensaio}
            </Moment> 
          </> : <TitleDanger>Data do ensaio não definida</TitleDanger>}
        </RowTitle>   
      </Header>
      <Body>
        <HeaderBody><Title size="20px">Integrantes</Title></HeaderBody>
        <BodyScroll>
          <BodyText>{escala.equipe_detalhe.split('<br>').join('\n')}</BodyText>
        </BodyScroll>  
      </Body>    
      <Body>
        <HeaderBody><Title size="20px">Músicas</Title></HeaderBody>
        {escala.musicas.map((musica) =>
          <Item key={musica.id}>
            <ItemMusica  
              title={musica.titulo} 
              artist={musica.artista} 
              navigation={navigation}
              musica={musica}/>
          </Item>
        )}
      </Body>      
      <Body>
        <HeaderBody><Title size="20px">Observações</Title></HeaderBody>
        <Card>
          <BodyText>{escala.observacoes}</BodyText>
        </Card>  
      </Body>    
    </Container>
  );
}