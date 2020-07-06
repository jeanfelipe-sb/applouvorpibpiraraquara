import React, { useState, useContext } from 'react';
import {View, Text, Button} from 'react-native'
import AuthContext from '../../contexts/auth';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container } from './styles'

export default function Menu() {
  const { signOut } = useContext(AuthContext);
  function handleSignOut() {
    signOut();
  }
    
  return (
    <Container>
      <Button title="Sign Out" onPress={handleSignOut} />
      <Icon name="home" size={24} color="black"/>
    </Container>
  );
}