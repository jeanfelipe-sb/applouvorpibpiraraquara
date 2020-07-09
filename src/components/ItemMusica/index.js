import React, { useState, useContext } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { 
  Icon,
  Card,
  CardBody,
  TextBody,
  CardRight,
  CardRightTouch,
  TextBodyError
} from './styles'

export default function ItemMusica(props) {
  return (
    <CardRightTouch>
      <Card>
        <Icon name="music-tone-alt"/>
        <CardBody>
          {props.children}
        </CardBody>
        <CardRight>
          <Icon name="arrow-right"/>
        </CardRight>
      </Card>       
    </CardRightTouch>  
  );
}