import { View, Text, TouchableOpacity, Image, StyleSheet,} from 'react-native'
import { useState, useEffect } from "react";
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useBatteryLevel} from "expo-battery";

export default function DetalhePacote({titulo, imagem, preco, setDetalhe }) {

  const[ bateria, setBateria] = useState();

  const batteryLevel = useBatteryLevel();

  useEffect( () => {
    setBateria( (batteryLevel *100).toFixed(0) )
  } , [batteryLevel] );
  
  return (
    <View style={[css.container, { backgroundColor: bateria > 20 ? '#EFEFEF' : '#353535' }]}>
      <View  style={[css.caixa, { backgroundColor: bateria > 20 ? '#fff' : '#000' }, {shadowColor: bateria > 20 ? '#000' : '#1D1D1D'}, {borderColor: bateria > 20 ? '#ddd' : '#181818'}]}>
          <Image style={css.imagem} source={imagem}/>        
        <Text style={[css.titulo, { color: bateria > 20 ? '#000' : '#fff' }]}>{titulo}</Text>
        <View style={css.valor}>
            <Text style={css.sifrao}>R$</Text>
            <Text style={css.preco}>{preco}</Text>      
        </View>   
        <TouchableOpacity onPress={ () => setDetalhe( false ) }>
          <MaterialCommunityIcons style={[css.botao, { color: bateria > 20 ? '#000' : '#fff' }]} name="arrow-left" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%"
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