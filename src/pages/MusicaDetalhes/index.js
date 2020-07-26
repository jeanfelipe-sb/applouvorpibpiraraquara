import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  ViewTitle,
  Title,
  Card,
  BodyCard,
  Icon,
  BodyCardText,
  HeaderTitle 
} from './styles'

export default function MusicaDetalhes({ route, navigation }) {    
  const { musica } = route.params;  
  return (         
    <Container>
      <ViewTitle>              
        <HeaderTitle size="25px">{musica.titulo}</HeaderTitle>
        <HeaderTitle>{musica.artista}</HeaderTitle>
      </ViewTitle>
      <Card> 
        <Title size="16px" numberOfLines={5}>Tonalidade original</Title>
        <BodyCard>
          <BodyCardText size="30px" numberOfLines={1}>{musica.tonalidade}</BodyCardText>
        </BodyCard>
      </Card>
      {musica.video_link ? <> 
        <Card onPress={()=>{ Linking.openURL(musica.video_link) }}> 
          <Title size="16px" numberOfLines={5}>Acessar Vídeo</Title>
          <BodyCard>
            <Icon name="youtube"/> 
          </BodyCard>
        </Card>
      </> : false}
      {musica.audio_link ? <> 
        <Card onPress={()=>{ Linking.openURL(musica.audio_link) }}> 
          <Title size="16px" numberOfLines={5}>Baixar áudio</Title>
          <BodyCard>
            <Icon name="download-cloud"/> 
          </BodyCard>
        </Card>
      </> : false}
      {musica.cifra_link ? <>
        <Card onPress={()=>{ Linking.openURL(musica.cifra_link) }}> 
          <Title size="16px" numberOfLines={5}>Baixar cifra</Title>
          <BodyCard>
            <Icon name="download"/> 
          </BodyCard>
        </Card> 
      </> : false}
    </Container>
  );
}