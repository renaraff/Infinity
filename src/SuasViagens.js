import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Calendar from 'expo-calendar';
import uuid from 'react-native-uuid'
import {useBatteryLevel} from "expo-battery"

import { useEffect, useState } from "react";

import Lista from './viagens'

export default function SuasViagens() {

    const [dados, setDados] = useState([]);
    const [calendario, setCalendario] = useState(0);
    const[ bateria, setBateria ] = useState();
    const batteryLevel = useBatteryLevel();

    useEffect( () => {
        setBateria( (batteryLevel *100).toFixed(0) )
      } , [batteryLevel] );

    async function getCalendarioID() {
        const calendarioID = await AsyncStorage.getItem('calendarioID');
        if (calendarioID) {
            setCalendario(calendarioID);
        }
    }

    async function getPermissions() {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status != 'granted') {
            return;
        }
    }

    async function getEvents() {
        if (calendario == 0) {
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate());

        const nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);

        const events = await Calendar.getEventsAsync([calendario], yesterday, nextYear);


        events.map(item => {

            const filtro = dados.filter(valor => valor.id == item.id);
            if (filtro.length == 0) {
                const evento = {
                    id: item.id,
                    agenda: item.title,
                    inicio: item.startDate,
                    final: item.endDate
                }
                setDados([...dados, evento]);
            }
        })
    }

    useEffect(() => {
        getPermissions();
        getCalendarioID();
    }, []);

    useEffect(() => {
        getEvents();
    }, [calendario])


    return (
        <View style={[css.tudo, { backgroundColor: bateria > 20 ? '#F0F0F0' : '#353535' }]}>
            <Text style={[css.texto, { color: bateria > 20 ? '#353535' : '#f0f0f0'}]}>PRÓXIMAS VIAGENS:</Text>
            <FlatList
                style={css.lista}
                data={dados}
                renderItem={({ item }) =>
                    <Lista
                        agenda={item.agenda}
                        inicio={item.inicio}
                        final={item.final}
                    />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
const css = StyleSheet.create({
    tudo: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',
    },
    lista: {
        width: "80%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    texto: {
        marginTop: 20,
        fontSize: 16,
    },
});