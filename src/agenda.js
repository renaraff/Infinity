import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, Platform } from "react-native";
import * as Calendar from 'expo-calendar';
import uuid from 'react-native-uuid'
import { useBatteryLevel } from "expo-battery";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Agenda({ navigation }) {
  const [agenda, setAgenda] = useState();
  const [inicio, setInicio] = useState();
  const [final, setFinal] = useState();
  const [dados, setDados] = useState([]);
  const [bateria, setBateria] = useState()
  const batteryLevel = useBatteryLevel();

  const [calendario, setCalendario] = useState(null);



  async function getPermissions() {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    }
  }

  async function getCalendarioID() {
    const calendarioID = await AsyncStorage.getItem('calendarioID');
    if (calendarioID) {
      setCalendario(calendarioID);
    }
  }

  useEffect(() => {
    
    getPermissions();
    getCalendarioID();

  }, [])

  useEffect(() => {
    setBateria((batteryLevel * 100).toFixed(0))
  }, [batteryLevel]);


  async function Salvar() {
    Keyboard.dismiss();
    if (agenda != "" && inicio != "" && final != "") {
      const evento = {
        id: uuid.v4(),
        agenda: agenda,
        inicio: inicio,
        final: final
      };
      const novoEvento = [...dados, evento];
      setDados(novoEvento);
      setAgenda("");
      setInicio("");
      setFinal("");



      if (!calendario) {
        const defaultCalendarSource =
          Platform.OS == 'ios'
            ? await Calendar.getDefaultCalendarAsync()
            : { isLocalAccount: true, name: 'Expo Calendar' }


        const newCalenderID = await Calendar.createCalendarAsync({
          title: 'Expo Calendar',
          color: 'blue',
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: 'internalCalendarName',
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        })
        await AsyncStorage.setItem( "calendarioID" , newCalenderID );
        setCalendario( newCalenderID );

      } else {
        const resultado = await Calendar.getCalendarsAsync();
        const newCalenderID = resultado.filter( value => value.id === calendario );
        await AsyncStorage.setItem( "calendarioID" , newCalenderID[0].id );
        setCalendario( newCalenderID[0].id );
      }

      


      let inicioDataHora = inicio.split(" ");
      let inicioData = inicioDataHora[0].split("-");
      let inicioHora = inicioDataHora[1].split(".");

      let finalDataHora = inicio.split(" ");
      let finalData = finalDataHora[0].split("-");
      let finalHora = finalDataHora[1].split(".");

      const newEvent = {
        title: agenda,
        startDate: new Date(inicioData[2], inicioData[1] - 1, inicioData[0], inicioHora[0], inicioHora[1]),
        endDate: new Date(finalData[2], finalData[1] - 1, finalData[0], finalHora[0], finalHora[1]),
        location: 'Sesi',
        notes: 'Meteoro da Paixão',
      };

      console.log( calendario );

      try {
        await Calendar.createEventAsync(calendario, newEvent);
        alert('Viagem agendada com sucesso!');
      } catch (error) {
        alert('Erro ao agendar a viagem!');
      }
    }
    navigation.navigate("Suas Viagens");

  }



  return (
    <View style={[css.tudo, { backgroundColor: bateria > 20 ? '#EFEFEF' : '#353535' }]}>
      <View style={[css.container, { backgroundColor: bateria > 20 ? '#fff' : '#000' }, { borderColor: bateria > 20 ? '#ddd' : '#181818' }]}>
        <Text style={[css.texto, { color: bateria > 20 ? '#000' : '#fff' }]}>AGENDAR VIAGEM</Text>
        <TextInput
          placeholder="Destino" 
          placeholderTextColor="rgba(86, 86, 86, 0.9)"
          style={[css.input, { backgroundColor: bateria > 20 ? '#F0F0F0' : '#353535' }, { borderColor: bateria > 20 ? '#DADADA' : '#5F5F5F' }, { color: bateria > 20 ? '#616161' : 'rgba(255, 255, 255, 0.50)' }]}
          textInput={agenda}
          onChangeText={(digitado) => setAgenda(digitado)}
          value={agenda}
        />
        <TextInput
          placeholder="Ida"
          placeholderTextColor="rgba(86, 86, 86, 0.9)"
          style={[css.input, { backgroundColor: bateria > 20 ? '#F0F0F0' : '#353535' }, { borderColor: bateria > 20 ? '#DADADA' : '#5F5F5F' }, { color: bateria > 20 ? '#616161' : 'rgba(255, 255, 255, 0.50)' }]}
          textInput={inicio}
          onChangeText={(digitado) => setInicio(digitado)}
          value={inicio}
        />
        <TextInput 
          placeholder="Volta"
          placeholderTextColor="rgba(86, 86, 86, 0.9)"
          style={[css.input, { backgroundColor: bateria > 20 ? '#F0F0F0' : '#353535' }, { borderColor: bateria > 20 ? '#DADADA' : '#5F5F5F' }, { color: bateria > 20 ? '#616161' : 'rgba(255, 255, 255, 0.50)' }]}
          textInput={final}
          onChangeText={(digitado) => setFinal(digitado)}
          value={final}
        />
        <TouchableOpacity style={css.btn} onPress={Salvar}>
          <Text style={css.btnText}>AGENDAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  tudo: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  container: {
    width: "90%",
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14
  },
  texto: {
    marginBottom: 20
  }
});