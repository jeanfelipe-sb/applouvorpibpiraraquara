import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import IconFeather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../styles/globalStyles'

import Home from './../pages/Home'
import Menu from './../pages/Menu'
import Escalas from './../pages/Escalas'
import EscalaDetalhes from '../pages/EscalaDetalhes'
// import ProximaEscala from '../pages/ProximaEscala'
import Musicas from './../pages/Musicas'
import MusicaDetalhes from '../pages/MusicaDetalhes'
import Avisos from './../pages/Avisos'
import AvisoDetalhes from '../pages/AvisoDetalhes'

const EscalasStack = createStackNavigator();

function EscalasStackScreen() {
 return (
   <EscalasStack.Navigator >
    <EscalasStack.Screen options={{headerShown: false}} name="Escalas" component={Escalas} />             
    <EscalasStack.Screen options={{ title: 'Detalhes da Escala' }} name="EscalaDetalhes" component={EscalaDetalhes} />
    <MusicasStack.Screen options={{ title: '' }} name="MusicaDetalhes" component={MusicaDetalhes} />
   </EscalasStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator >
    <HomeStack.Screen options={{headerShown: false}} name="Home" component={Home} />
    <HomeStack.Screen name="Avisos" component={Avisos} />      
    <HomeStack.Screen options={{ title: 'Aviso' }} name="AvisoDetalhes" component={AvisoDetalhes} />  
    <HomeStack.Screen options={{ title: 'Sua Próxima Escala' }} name="ProximaEscala" component={EscalaDetalhes} />  
    <MusicasStack.Screen options={{ title: '' }} name="MusicaDetalhes" component={MusicaDetalhes} />        
   </HomeStack.Navigator>
  );
}

const MusicasStack = createStackNavigator();

function MusicasStackScreen() {
 return (
   <MusicasStack.Navigator >
    <MusicasStack.Screen options={{headerShown: false}} name="Musicas" component={Musicas} />             
    <MusicasStack.Screen options={{ title: '' }} name="MusicaDetalhes" component={MusicaDetalhes} />
   </MusicasStack.Navigator>
  );
}

const MenuStack = createStackNavigator();

function MenuStackScreen() {
 return (
   <MenuStack.Navigator >
    <MenuStack.Screen options={{headerShown: false}} name="Menu" component={Menu} />
    <MenuStack.Screen name="Avisos" component={Avisos} />             
    <MenuStack.Screen options={{ title: 'Aviso' }} name="AvisoDetalhes" component={AvisoDetalhes} />             
   </MenuStack.Navigator>
  );
}

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
      initialRouteName="Home"
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
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{ title: 'Início' }}
      />
      <Tab.Screen name="Escalas" component={EscalasStackScreen} />
      <Tab.Screen name="Musicas" component={MusicasStackScreen} />
      <Tab.Screen name="Menu" component={MenuStackScreen} />
    </Tab.Navigator>
  );
}

export default AppRoutes;


