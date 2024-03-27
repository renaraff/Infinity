import { useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Touchable } from "react-native";
import UserContext from "./Context/UserContext";

import Suica from "./Suica"

export default function Roteiros( {navigation} )
{

    
    return (  
    <ScrollView style={css.header}>
        <View style={css.container}>
            <View style={css.caixa}>
            <Image style={css.imagem} source={require('../src/imagem/suica.png' )}></Image>
            <View style={css.caixatexto}>
                <Text style={css.titulo}>Pacote Suiça 2025</Text>
                <Text style={css.texto}>All Inclusive</Text>
                <Text style={css.subtitulo}>Passagem aérea econômica</Text>
                <Text style={css.subtitulo}>Hospedagem econômica</Text>
                <TouchableOpacity>
                    <Text style={css.subtitulo2} onPress={Suica} >Ver mais</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={css.caixa}>
            <Image style={css.imagem} source={require('../src/imagem/maceio.jpg' )}></Image>
            <View style={css.caixatexto}>
                <Text style={css.titulo}>Maceio Maio 2024</Text>
                <Text style={css.texto}>All Inclusive</Text>
                <Text style={css.subtitulo}>Passagem aérea econômica</Text>
                <Text style={css.subtitulo}>Hospedagem econômica</Text>
                <TouchableOpacity>
                    <Text style={css.subtitulo2}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={css.caixa}>
            <Image style={css.imagem} source={require('../src/imagem/grecia.png' )}></Image>
            <View style={css.caixatexto}>
                <Text style={css.titulo}>Pacote Grécia Julho</Text>
                <Text style={css.texto}>All Inclusive</Text>
                <Text style={css.subtitulo}>Passagem aérea econômica</Text>
                <Text style={css.subtitulo}>Hospedagem econômica</Text>
                <TouchableOpacity>
                    <Text style={css.subtitulo2}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={css.caixa}>
            <Image style={css.imagem} source={require('../src/imagem/beto-carrero.jpg' )}></Image>
            <View style={css.caixatexto}>
                <Text style={css.titulo}>Beto Carrero</Text>
                <Text style={css.texto}>All Inclusive</Text>
                <Text style={css.subtitulo}>Passagem aérea econômica</Text>
                <Text style={css.subtitulo}>Hospedagem econômica</Text>
                <TouchableOpacity>
                    <Text style={css.subtitulo2}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={css.caixa}>
            <Image style={css.imagem} source={require('../src/imagem/new-york.jpg' )}></Image>
            <View style={css.caixatexto}>
                <Text style={css.titulo}>Nova Iorque</Text>
                <Text style={css.texto}>All Inclusive</Text>
                <Text style={css.subtitulo}>Passagem aérea econômica</Text>
                <Text style={css.subtitulo}>Hospedagem econômica</Text>
                <TouchableOpacity>
                    <Text style={css.subtitulo2}>Ver mais</Text>
                </TouchableOpacity> 
            </View>
            </View>
        </View>
    </ScrollView>
    )
}

const css = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Cor de fundo do ScrollView
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        marginBottom: "5%"
    },
    caixa: {
        flexDirection: 'row',
        width: "92%",
        backgroundColor: '#fff', // Cor de fundo da caixa
        borderRadius: 10, // Raio dos cantos da caixa
        elevation: 5, // Sombra
        marginBottom: "5%"
    },
    imagem: {
        borderTopLeftRadius: 10, // Borda arredondada do canto superior esquerdo
        borderBottomLeftRadius: 10, // Borda arredondada do canto INFERIOR esquerdo
        width: 180, // Largura da imagem
        height: 153, // Altura da imagem
    },
    titulo: {
        padding: 4,
        fontSize: 18, // Tamanho do título
        fontWeight: 'bold', // Negrito
        marginBottom: 10, // Margem inferior
    },
    texto: {
        fontSize: 17, // Tamanho do texto
        marginBottom: 5, // Margem inferior
        color: '#3C4276',
        paddingHorizontal: 4,
    },
    subtitulo: {
      fontSize: 13, // Tamanho do subtitulo
      paddingHorizontal: 4,
      color: '#666'
    },
    subtitulo2: {
        fontSize: 13, // Tamanho do subtitulo
        paddingHorizontal: 4,
        color: '#999',
        marginTop: "5%"
      }
  });
  