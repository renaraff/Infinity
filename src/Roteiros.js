import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React, { useState } from 'react';
import uuid from "react-uuid";
import Pacote from './Pacote';
import DetalhePacote from './DetalhePacote';

const roteiros = [
    {
        id: uuid(),
        imagem: require( "../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2024",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2023",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 202",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    },
    {
        id: uuid(),
        imagem: require("../assets/imagem/suica.png"),
        titulo: "Pacote Suiça 2025",
        hospedagem: "A Mais cara",
        transporte: "O Mais rápido",
        preco: "R$ 2.331"
    }
]

export default function Roteiros() {

    const[ detalhe, setDetalhe ] = useState(false);
    const[ titulo, setTitulo ] = useState("");
    const[ imagem, setImagem ] = useState("");
    const[ preco, setPreco ] = useState("");

    if( detalhe ) {
        return( <DetalhePacote titulo={titulo} imagem={imagem} preco={preco} setDetalhe={setDetalhe}/> )
    }


    return (
        <View >
            <FlatList 
                style={css.container}
                data={roteiros}
                renderItem={({item}) => <Pacote titulo={item.titulo} imagem={item.imagem} hospedagem={item.hospedagem} transporte={item.transporte} preco={item.preco} setDetalhe={setDetalhe} setTitulo={setTitulo} setImagem={setImagem} setPreco={setPreco} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: "5%"
}});
