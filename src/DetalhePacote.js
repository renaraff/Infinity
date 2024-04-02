import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetalhePacote({titulo, imagem, preco, setDetalhe }) {

  return (
    <View style={css.container}>
      <View style={css.caixa}>
          <Image style={css.imagem} source={imagem}/>        
        <Text style={css.titulo}>{titulo}</Text>
        <View style={css.valor}>
            <Text style={css.sifrao}>R$</Text>
            <Text style={css.preco}>{preco}</Text>      
        </View>   
        <TouchableOpacity onPress={ () => setDetalhe( false ) }>
          <MaterialCommunityIcons style={css.botao} name="arrow-left" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  caixa: {
    width: "92%",
    backgroundColor: '#fff', // Cor de fundo da caixa
    borderRadius: 10, // Raio dos cantos da caixa
    elevation: 5, // Sombra
    marginTop: "5%"
  },
  titulo: {
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: '500'
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preco: {
    fontSize: 50,
    color: "#3c4276"
  },
  sifrao: {
    marginRight: "2%",
    color: "#3c4276"
  },
  imagem: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, // Borda arredondada do canto superior esquerdo
    width: "100%",
    height: 450,
  },
  botao: {
    opacity: 0.5,
    fontSize: 18,
    marginBottom: 6,
    paddingHorizontal: 10,
  }
})