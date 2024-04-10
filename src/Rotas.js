import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";

import Login from './login';
import Agenda from './agenda';
import Mapa from './mapa';
import Viagens from './viagens';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from './Context/UserContext';
import Roteiros from './Roteiros';
import { useBatteryLevel } from "expo-battery"

const Tab = createBottomTabNavigator();


export default function Rotas() {

    const { login, setLogin, cadastro, setCadastro } = useContext(UserContext);

    const [bateria, setBateria] = useState();
    const batteryLevel = useBatteryLevel();

    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0))
    }, [batteryLevel]);

    if (login == false) {
        return (
            <Login />
        )
    }

    if (cadastro) {
        return (
            <View style={[css.tudo, { backgroundColor: bateria > 20 ? '#ffff' : '#000' }]}>
                <View style={[css.container, { backgroundColor: bateria > 20 ? '#fff' : '#000' }]}>
                    <Image style={css.imagem} source={require('../src/Logo.png')}></Image>
                    <View><Text style={[css.texto, { color: bateria > 20 ? '#000' : '#fff' }]}>CADASTRE-SE PARA NAVEGAR</Text></View>
                    <View  style={[css.caixa, { backgroundColor: bateria > 20 ? '#EDEDED' : 'rgba(217, 217, 217, 0.2)'}, { borderColor: bateria > 20 ?  '#ddd' : 'rgba(217, 217, 217, 0.2)'}]}>
                        <TextInput style={[css.input, { backgroundColor: bateria > 20 ? '#fff' : '#000'}, {borderColor: bateria > 20 ? '#DADADA' : 'rgba(70, 70, 70, 1)'}, {color: bateria > 20 ? "#616161" : "rgba(255, 255, 255, 0.50)"}]} placeholder="E-mail" placeholderTextColor="#808080"></TextInput>
                        <TextInput style={[css.input, { backgroundColor: bateria > 20 ? '#fff' : '#000'}, {borderColor: bateria > 20 ? '#DADADA' : 'rgba(70, 70, 70, 1)'}, {color: bateria > 20 ? "#616161" : "rgba(255, 255, 255, 0.50)"}]} placeholder="Senha" placeholderTextColor="#808080"></TextInput>
                        <TouchableOpacity style={css.btn} onPress={() => setLogado(true)}>
                            <Text style={css.btnText} onPress={() => { setCadastro(false); setLogin(false); }}>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={css.cadastro} onPress={() => { setCadastro(false); setLogin(true); }}>Já possui uma conta? Entre</Text></View>
                </View>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Pacote">
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
                <Tab.Screen name="Suas Viagens" component={Viagens} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const css = StyleSheet.create({
    tudo: {
        height: "100%",
    },
    container: {
        height: "100%",
        width: "100%",
        textAlign: 'center',
        alignItems: 'center',
    },
    caixa: {
        width: "88%",
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
    },
    input: {
        width: "98%",
        height: 48,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        fontSize: 14,
    },
    btn: {
        width: "97%",
        height: 45,
        backgroundColor: '#3C4276',
        borderRadius: 10,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    btnText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    imagem: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        marginTop: "18%",
        marginBottom: "18%"
    },
    cadastro: {
        color: '#787878'
    }
});