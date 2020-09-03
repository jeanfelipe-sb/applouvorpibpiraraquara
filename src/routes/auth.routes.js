import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../pages/Login'
import Logout from '../pages/Logout'

const Stack = createStackNavigator();

function AuthRoutes() {  
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen ooptions={{headerShown: false}} name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;


