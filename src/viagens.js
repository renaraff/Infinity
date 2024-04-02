import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Viagens({agenda, setAgenda, inicio, setInicio, final, setFinal, dados, setDados}){

    function ExibeViagem()
    {
        setAgenda(agenda);
        setInicio(inicio);
        setFinal(final);
        setDados(dados);
    }
    return (
        <View>
            <Text>Próximas Viagens:</Text>
            <Text>{agenda}</Text>
            <Text>{inicio}</Text>
            <Text>{final}</Text>
            <Text>{dados}</Text>
        </View>
        
    )
}









// export default function Viagens({agenda, inicio, final}) {
    // return (  
    // <View>
    //    <View style={css.caixa}>
    //    <Text>Viagens Realizadas ►</Text>
    //    </View>

    //    <View style={css.caixa}>
    //    <Text>Próximas Viagens ►</Text>
    // </View>        
    //    <TouchableOpacity style={css.btn}><Text style={css.btnText}>AGENDAR NOVA VIAGEM</Text></TouchableOpacity>
    //    <TouchableOpacity style={css.btn}><Text style={css.btnText} onPress={Diario}>ACESSAR DIÁRIO DE VIAGENS</Text></TouchableOpacity>
    // </View>
    // ) 
// }

const css = StyleSheet.create ({

    caixa: {
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
    btn:{
        width:"93%",
        marginLeft: '3%',
        height: 45,
        backgroundColor: '#3C4276',
        borderRadius: 10,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        marginTop: '5%'
    },
    btnText:{
        textAlign: 'center',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    agenda: {
    fontSize: 18,
    },
    inicio: {
    fontSize: 16,
    color: '#3C4276',
    marginBottom: 5,
    },
    final: {
    fontSize: 16,
    color: '#3C4276',
    },
    });