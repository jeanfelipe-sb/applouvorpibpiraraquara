import React, { useState, useContext } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import AuthContext from '../../contexts/auth';

import {
  Container,
  Title,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
} from './styles'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const {signed, signIn} = useContext(AuthContext);

  async function handleSignIn() {
    try {
      const credentials = {
        email: 'jiam16@yahoo.com.br',//username,
        password: 'Jfsb1234'//password
      }
      
      setLoadingLogin(true)
      signIn(credentials)
        .then(r => setLoadingLogin(false))
        .catch(function() {          
          setLoadingLogin(false)
          setErrorMessage('Erro na tentativa de login')
       })      

    } catch (err) {
      console.log(err)
      setLoadingLogin(false)
      setErrorMessage('Erro na tentativa de login')
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Title>Bem-vindo</Title>
      <TextInformation>
        Para continuar, precisamos que você informe seu usuário
      </TextInformation>

      {!!errorMessage && <Error>{errorMessage}</Error>}

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={username}
          onChangeText={username => setUsername(username)}
        />

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite sua senha"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />

        <Button onPress={handleSignIn}>
          {loadingLogin ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Prosseguir</ButtonText>
          )}
        </Button>
      </Form>
    </Container>
  )
}

