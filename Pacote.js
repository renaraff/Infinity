import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Touchable } from "react-native";
import { useState, useEffect } from "react";
import {useBatteryLevel} from "expo-battery"

export default function Pacote({ titulo, imagem, preco, hospedagem, transporte, setDetalhe, setTitulo, setImagem, setPreco })
{
    const[ bateria, setBateria ] = useState();

    const batteryLevel = useBatteryLevel();

    useEffect( () => {
      setBateria( (batteryLevel *100).toFixed(0) )
    } , [batteryLevel] );

    function ExibePacote()
    {
        setTitulo( titulo );
        setImagem( imagem );
        setPreco( preco );
        setDetalhe( true );
    }
    return (
        <View style={[css.container, { backgroundColor: bateria > 20 ? '#F0F0F0' : '#353535' }]}>
            <View style={[css.caixa, { backgroundColor: bateria > 20 ? '#fff' : '#000' }]}>
                <Image style={css.imagem} source={imagem} />
                <View style={css.caixatexto}>
                    <Text style={[css.titulo,  { color: bateria > 20 ? '#000' : '#fff' }]}>{titulo}</Text>
                    <Text style={css.texto}>All Inclusive</Text>
                    <Text style={css.subtitulo}>{transporte}</Text>
                    <Text style={css.subtitulo}>{hospedagem}</Text>
                    <Text style={css.preco}>{preco}</Text>
                    <TouchableOpacity onPress={ExibePacote}>
                        <Text style={css.subtitulo2}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
        </View>            
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    caixa: {
        marginTop: "3%",
        flexDirection: 'row',
        width: "92%",
        borderRadius: 10, // Raio dos cantos da caixa
        elevation: 5, // Sombra
        marginBottom: "5%"
    },
    imagem: {
        borderTopLeftRadius: 10, // Borda arredondada do canto superior esquerdo
        borderBottomLeftRadius: 10, // Borda arredondada do canto INFERIOR esquerdo
        width: 180, 
        height: 153, 
    },
    titulo: {
        padding: 6,
        fontSize: 18, 
        fontWeight: '500', 
        marginBottom: 5, 
    },
    texto: {
        fontSize: 17, 
        marginBottom: 10, 
        color: '#3C4276',
        paddingHorizontal: 6,
    },
    subtitulo: {
        fontSize: 13, 
        paddingHorizontal: 6,
        color: '#666'
    },
    subtitulo2: {
        fontSize: 13, 
        paddingHorizontal: 6,
        color: '#999',
    },
    preco: {
        opacity: 0
    }
});
