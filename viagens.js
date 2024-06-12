import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useBatteryLevel } from "expo-battery"

export default function Viagens({ agenda, inicio, final }) {

    const [bateria, setBateria] = useState();
    const batteryLevel = useBatteryLevel();

    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0))
    }, [batteryLevel]);

    return (
        <View>
        <View style={[css.caixa, { backgroundColor: bateria > 20 ? '#fff' : '#000' }, { borderColor: bateria > 20 ? 'rgba(219, 219, 219, 1)' : 'rgba(34, 34, 34, 1)'}]}>
            <Text style={css.titulo}>{agenda}</Text>
            <Text style={[css.data, { color: bateria > 20 ? '#353535' : '#979797' }]}>{inicio}</Text>
            <Text style={[css.data, { color: bateria > 20 ? '#353535' : '#979797' }]}>{final}</Text>
        </View>
          </View>
    )
}

const css = StyleSheet.create({
    caixa: {
        width: "90%",
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 20,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    titulo: {
        fontSize: 17,
        color: '#3C4276',
    }
});