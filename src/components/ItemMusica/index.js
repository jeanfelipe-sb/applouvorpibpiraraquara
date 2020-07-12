import React, { useState, useContext } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { 
  Icon,
  Card,
  CardBody,
  TextBody,
  CardRight,
  CardRightTouch,
  TextBodyError,
  ArtistMusic,TitleMusic
} from './styles'

export default function ItemMusica(props) {
  return (
    <CardRightTouch>
      <Card>
        <Icon name="music-tone-alt"/>
        <CardBody>
          <TitleMusic numberOfLines={1}>{props.title}</TitleMusic>
          <ArtistMusic numberOfLines={1}>{props.artist}</ArtistMusic>
        </CardBody>
        <CardRight>
          <Icon name="arrow-right"/>
        </CardRight>
      </Card>       
    </CardRightTouch>  
  );
}