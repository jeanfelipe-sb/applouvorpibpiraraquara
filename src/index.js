import 'react-native-gesture-handler';
import React, { Component } from 'react'
import Routes from './routes/index'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import {AuthProvider} from './contexts/auth'
import { StatusBar }from 'react-native'
import { setTopLevelNavigator } from './utils'

import { globalStyles } from './styles'

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <ThemeProvider theme={globalStyles}>
          <StatusBar barStyle="light-content" backgroundColor="#000"/>
          <NavigationContainer 
            ref={navigatorRef => {
              setTopLevelNavigator(navigatorRef)
            }}>
            <Routes/>
          </NavigationContainer>  
        </ThemeProvider>
      </AuthProvider>     
    );
  }
}
