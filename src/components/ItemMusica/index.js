import React, { useState, useContext } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { 
  Icon,
  Card,
  CardBody,
  CardLeft,
  CardRight,
  CardRightTouch,
  ArtistMusic,
  TitleMusic,
} from './styles'

export default function ItemMusica(props) {
  return (
    <CardRightTouch onPress={() => props.navigation.navigate('MusicaDetalhes', {musica: props.musica})}>
      <Card>
        <CardLeft>
          <Icon name="music-tone-alt"/>
          <CardBody>
            <TitleMusic numberOfLines={1}>{props.title}</TitleMusic>
            <ArtistMusic numberOfLines={1}>{props.artist}</ArtistMusic>
          </CardBody>
        </CardLeft>
        <CardRight>
          <Icon name="arrow-right"/>
        </CardRight>
      </Card>       
    </CardRightTouch>  
  );
}