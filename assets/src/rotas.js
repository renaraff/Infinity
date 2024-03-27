import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './login';
import Pacote from './pacote';
import Agenda from './agenda';
import Mapa from './mapa';
import Viagens from './viagens';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';


const Tab = createBottomTabNavigator();


  export default function Rotas() {

    const {logado} = useContext(UserContext);

    if( logado == false ) {
        return( <Login/>)
    }

  return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Pacote">
        <Tab.Screen name="Roteiros" component={Pacote} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
            ),}} />
        <Tab.Screen name="Agendamento" component={Agenda} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
            ),}} />
            <Tab.Screen name="Mapa Interativo" component={Mapa} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
            ),}} />
            <Tab.Screen name="Suas Viagens" component={Viagens} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
            ),}} />
        </Tab.Navigator>
        </NavigationContainer>
  );
};