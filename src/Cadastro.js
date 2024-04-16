import { useContext } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
import UserContext from "./Context/UserContext";
import {useBatteryLevel} from "expo-battery"

export default function Cadastro( {navigation} )
{
    const{usuario} = useContext( UserContext );

    return (  
        <View style={css.tudo}> 
        <Text>Bem vindo: {usuario}</Text>
        <View style={css.container}>
            <Image style={css.imagem} source={require('../src/Logo.png' )}></Image>
            <View><Text style={css.texto}>CADASTRE-SE PARA NAVEGAR</Text></View>
            <View style={css.caixa}>
                <TextInput style={css.input} placeholder="Usuario"></TextInput>
                <TextInput style={css.input} placeholder="E-mail"></TextInput>
                <TextInput style={css.input} placeholder="Senha"></TextInput>
                <TouchableOpacity style={css.btn} onPress={() => setLogado( true )}>
                    <Text style={css.btnText}>CADASTRAR</Text>
                </TouchableOpacity>
                </View>
                <View><Text style={css.cadastro}>Já possui uma conta? Entre</Text></View>
        </View>        
        </View>
    )
}

const css = StyleSheet.create ({
    container: {
        width: "100%",
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    caixa: {
        width: "88%",
        margin: 20,
        backgroundColor: '#EDEDED',
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
        backgroundColor: 'white',
        borderColor: '#DADADA',
        color: '#979797',
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