import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function diario() {
  return (
    <View style={css.caixa}>
      <Text>diario</Text>
    </View>
  )
};

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
    }
})