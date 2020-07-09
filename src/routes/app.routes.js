import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFeather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../styles/globalStyles'

import Home from './../pages/Home'
import Escalas from './../pages/Escalas'
import Menu from './../pages/Menu'
import Musicas from './../pages/Musicas'

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home',
    lib: SimpleLineIcons
  },
  Escalas: {
    name: 'list',
    lib: SimpleLineIcons
  },
  Musicas: {
    name: 'playlist',
    lib: SimpleLineIcons
  },
  Menu: {
    name: 'menu',
    lib: IconFeather
  },
}

function AppRoutes() {  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const {lib: Icon, name}  = icons[route.name];
          return <Icon name={name} size={size} color={color}/>
        }
    })}
    tabBarOptions={{
      style:{
        backgroundColor: '#fff',
        borderTopColor: 'rgba(255,255,255, 0.2)'
      },
      activeTintColor: styles.colors.primary,
      inactiveTintColor: styles.colors.regular
    }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'Início'
        }}
      />
      <Tab.Screen name="Escalas" component={Escalas} />
      <Tab.Screen name="Musicas" component={Musicas} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}

export default AppRoutes;


