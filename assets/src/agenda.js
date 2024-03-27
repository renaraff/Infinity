import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, Platform } from "react-native";
import * as Calendar from 'expo-calendar';
import uuid from 'react-uuid';
import Lista from './viagens';

export default function Agenda()
{
    const[ agenda, setAgenda ] = useState();
    const[ inicio, setInicio ] = useState();
    const[ final, setFinal ] = useState();
    const[ dados, setDados ] = useState([]);

    async function getPermissions()
    {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if ( status === 'granted' ) {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      }
    }

    useEffect(() => {
      getPermissions();
    },[])

    
    async function Salvar()
    {
        Keyboard.dismiss();
        if( agenda != "" && inicio != "" && final != "")
        {
        const evento = {
            id: uuid.v4(),
            agenda: agenda,
            inicio: inicio,
            final: final
        };
        const novoEvento = [...dados, evento];
        setDados( novoEvento ); 
        setAgenda( "" );
        setInicio( "" );
        setFinal( "" );     

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
        });

        let inicioDataHora = inicio.split(" ");
        let inicioData = inicioDataHora[0].split("-");
        let inicioHora = inicioDataHora[1].split(".");

        let finalDataHora = inicio.split(" ");
        let finalData = finalDataHora[0].split("-");
        let finalHora = finalDataHora[1].split(".");

        const newEvent = {
          title: agenda,
          startDate: new Date(inicioData[2], inicioData[1] -1, inicioData[0], inicioHora[0], inicioHora[1]),
          endDate: new Date(finalData[2], finalData[1], finalData[0], finalHora[0], finalHora[1]),
          location: 'Sesi',
          notes: 'Meteoro da Paixão',
        };

        try {
          await Calendar.createEventAsync(newCalenderID, newEvent);
          alert('Viagem agendada com sucesso!');
        } catch (error) {
          alert( 'Erro ao agendar a viagem!' );
        }
        }

    }



    return(
        <View>
            <View style={css.container}>
            <Text style={css.texto}>AGENDAR VIAGEM</Text>
                <TextInput 
                placeholder="Destino" 
                style={css.input}
                textInput={agenda}
                onChangeText={ (digitado) => setAgenda(digitado)}
                value={agenda}
                 />
                <TextInput 
                placeholder="Ida" 
                style={css.input}
                textInput={inicio}
                onChangeText={ (digitado) => setInicio(digitado)}
                value={inicio}
                />
                <TextInput placeholder="Volta"
                style={css.input}
                textInput={final}
                onChangeText={ (digitado) => setFinal(digitado)}
                value={final}
                />
                <TouchableOpacity style={css.btn} onPress={Salvar}>
                    <Text style={css.btnText}>AGENDAR</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={dados}
                renderItem={ ({item}) => 
                <Lista agenda={item.agenda} 
                inicio={item.inicio} 
                final={item.final} />}

                keyExtractor={ item => item.id}
            />
        </View>
    )
}

const css = StyleSheet.create({
    
    container: {
        width: "90%",
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    input: {
        width: "98%",
        height: 48,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        fontSize: 14,
        backgroundColor: '#F0F0F0',
        borderColor: '#DADADA',
        color: 'black',
    },
    btn:{
        width:"97%",
        height: 45,
        backgroundColor: '#3C4276',
        borderRadius: 10,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    btnText:{
        textAlign: 'center',
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14
    },
    texto: {
        marginLeft: "27%",
        marginBottom: 20
    }
  });