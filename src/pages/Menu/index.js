import React, { useState, useContext } from 'react';
import {View, Text, Button} from 'react-native'
import AuthContext from '../../contexts/auth';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, ViewTitle, Title } from './styles'

export default function Menu({navigation}) {
  const { signOut } = useContext(AuthContext);
  function handleSignOut() {
    signOut();
  }
    
  return (
    <Container>
      <ViewTitle onPress={() => navigation.navigate('Avisos')}>              
        <Title>Avisos</Title>
      </ViewTitle>
      <ViewTitle onPress={handleSignOut}>              
        <Title>Sair</Title>
      </ViewTitle>
    </Container>
  );
}