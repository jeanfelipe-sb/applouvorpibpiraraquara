import React, { useState, useContext } from 'react';
import {View, Text, Button} from 'react-native'
import AuthContext from '../../contexts/auth';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, ViewTitle, Title } from './styles'

export default function EscalaDetalhes({ route, navigation }) {     
  const { escala } = route.params;  
  return (
    <Container>
      <ViewTitle>              
        <Title>Detalhes escala</Title>
      </ViewTitle>
    </Container>
  );
}