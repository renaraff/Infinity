import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import Pacote from './Pacote';
import Cadastro from './Cadastro';
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
        <Tab.Screen name="Cadastro" component={Cadastro} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
            ),}} />
        </Tab.Navigator>
        </NavigationContainer>
  );
};