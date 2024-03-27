import { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { UserContext } from "./Context/UserContext";

export default function Login ()
{
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ erro, setErro ] = useState( false );

    const {Login} = useContext( UserContext );

    //import LinkCadastro from './cadastro'; onPress={LinkCadastro}
  
    function realizalogin()
    {
        Login( email, senha );
    }

    return (  
        <View style={css.tudo}> 
        <View style={css.container}>
            <Image style={css.imagem} source={require('../src/Logo.png' )}></Image>
            <View><Text style={css.texto}>ENTRE PARA NAVEGAR</Text></View>
            <View style={css.caixa}>
                <TextInput style={css.input} placeholder="E-mail" value={email} onChangeText={ (digitado) => setEmail( digitado )}></TextInput>
                <TextInput style={css.input} placeholder="Senha" value={senha} onChangeText={ (digitado) => setSenha( digitado )}></TextInput>
                <TouchableOpacity style={css.btn} onPress={realizalogin}>
                    <Text style={css.btnText}>ENTRAR</Text>
                </TouchableOpacity>
                </View>
                <View><Text style={css.cadastro}>Não tem conta? Cadastre-se</Text></View>
                { erro && <Text> Por favor confirme seus dados.</Text>}
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
        color: '#616161',
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