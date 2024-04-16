import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useBatteryLevel } from "expo-battery"
import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';

import Login from './login';
import Agenda from './agenda';
import Mapa from './mapa';
import SuasViagens from './SuasViagens';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Roteiros from './Roteiros';


const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado } = useContext(UserContext);

  const [bateria, setBateria] = useState();
  const batteryLevel = useBatteryLevel();

  useEffect(() => {
    setBateria((batteryLevel * 100).toFixed(0))
  }, [batteryLevel]);

  if (logado == false) {
    return (<Login />)
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={bateria > 20 ? "white" : "black"}
      />
      <Tab.Navigator initialRouteName="Pacote"
        screenOptions={{
          headerStyle: {
            backgroundColor: bateria > 20 ? "white" : "black",
          },
          headerTintColor: bateria > 20 ? "black" : "white",
          tabBarStyle: {
            backgroundColor: bateria > 20 ? "white" : "black",
          },
          tabBarActiveTintColor: bateria > 20 ? "black" : "white",
          tabBarInactiveTintColor: bateria > 20 ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Tab.Screen name="Roteiros" component={Roteiros} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Agendamento" component={Agenda} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Mapa Interativo" component={Mapa} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Suas Viagens" component={SuasViagens} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

