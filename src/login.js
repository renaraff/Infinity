import { useContext, useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { UserContext } from "./Context/UserContext";
import { useBatteryLevel } from "expo-battery"

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false);
    const { Login } = useContext(UserContext);

    const [bateria, setBateria] = useState();

    const batteryLevel = useBatteryLevel();

    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0))
    }, [batteryLevel]);

    //import LinkCadastro from './cadastro'; onPress={LinkCadastro}
    const { setLogin, setCadastro } = useContext(UserContext);

    function realizalogin() {
        Login(email, senha);
    }

    return (
        <View style={[css.tudo, { backgroundColor: bateria > 20 ? '#fff' : '#000' }]}>
            <View style={[css.container, { backgroundColor: bateria > 20 ? '#fff' : '#000' }]}>
                <Image style={css.imagem} source={require('../src/Logo.png')}></Image>
                <View><Text style={[css.texto, { color: bateria > 20 ? '#000' : '#fff' }]}>ENTRE PARA NAVEGAR</Text></View>
                <View style={[css.caixa, { backgroundColor: bateria > 20 ? '#EDEDED' : 'rgba(217, 217, 217, 0.2)' }, { borderColor: bateria > 20 ? '#ddd' : 'rgba(217, 217, 217, 0.2)' }]}>
                    <TextInput style={[css.input, { backgroundColor: bateria > 20 ? '#fff' : '#000' }, { borderColor: bateria > 20 ? '#DADADA' : 'rgba(70, 70, 70, 1)' }, { color: bateria > 20 ? "#616161" : "rgba(255, 255, 255, 0.50)" }]} placeholder="E-mail" placeholderTextColor="#808080" value={email} onChangeText={(digitado) => setEmail(digitado)}></TextInput>
                    <TextInput style={[css.input, { backgroundColor: bateria > 20 ? '#fff' : '#000' }, { borderColor: bateria > 20 ? '#DADADA' : 'rgba(70, 70, 70, 1)' }, { color: bateria > 20 ? "#616161" : "rgba(255, 255, 255, 0.50)" }]} placeholder="Senha" placeholderTextColor="#808080" value={senha} onChangeText={(digitado) => setSenha(digitado)}></TextInput>
                    <TouchableOpacity style={css.btn} onPress={realizalogin}>
                        <Text style={css.btnText} onPress={() => setLogin(true)}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                <View><Text style={css.cadastro} onPress={() => { setCadastro(true); setLogin(true); }}>Não tem conta? Cadastre-se</Text></View>
                {erro && <Text> Por favor confirme seus dados.</Text>}
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    tudo: {
        height: "100%"
    },
    container: {
        width: "100%",
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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