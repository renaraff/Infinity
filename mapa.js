import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import * as Network from 'expo-network'
import { useBatteryLevel } from "expo-battery";

export default function Mapa( {navigation} )
{
    const [rede, setRede] = useState(false);
    const [bateria, setBateria] = useState()
    const batteryLevel = useBatteryLevel();

    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0))
      }, [batteryLevel]);

    async function getStatus() {
        const status = await Network.getNetworkStateAsync();
        
        if (status.type == "WIFI") {
            setRede(true);
        }
    }

    useEffect(() => {
        getStatus();
    }, []);
    
    useEffect(() => {
        getStatus();
    }, [rede]);

    return (  
    <View style={[css.tudo, {backgroundColor: bateria > 20 ? '#EFEFEF' : '#353535'}]}>
        { rede ? <Text style={[css.semnet, {color: bateria > 20 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)'}]}>Mapa Interativo</Text>
        : <Text style={[css.semnet, {color: bateria > 20 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)'}]} >Verifique sua conexão de rede para carregar o mapa</Text> }
    </View>
    )
}
const css = StyleSheet.create({
    tudo: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    semnet: {
        fontSize: 15.5,
    }
})
