import { View, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import uuid from "react-uuid";
import Pacote from './Pacote';
import DetalhePacote from './DetalhePacote';
import * as Network from 'expo-network'

export default function Roteiros() {

    const [detalhe, setDetalhe] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [imagem, setImagem] = useState("");
    const [preco, setPreco] = useState("");
    const [rede, setRede] = useState(false);

    async function getStatus() {
        const status = await Network.getNetworkStateAsync();

        if (status.type == "WIFI") {
            setRede(true);
        }
    }

    useEffect(() => {
        getStatus();
    }, []);

    useEffect(() => {
        getStatus();
    }, [rede]);

    const roteiros = [
        {
            id: uuid(),
            imagem: rede ? require('./assets/imagem/suica.png') : require("./assets/imagem/carregando.png"),
            titulo: "Pacote Suiça 2025",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "2.331"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/grecia.png") : require("./assets/imagem/carregando.png"),
            titulo: "Pacote Grécia",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "4.147"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/maceio.jpg") : require("./assets/imagem/carregando.png"),
            titulo: "Pacote Maceió",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "1.077"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/beto-carrero.jpg") : require("./assets/imagem/carregando.png"),
            titulo: "Pacote Beto Carrero",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "439"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/new-york.jpg") : require("./assets/imagem/carregando.png"),
            titulo: "Nova Iorque 2024",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "R$ 2.668"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/sao-paulo.jpg") : require("./assets/imagem/carregando.png"),
            titulo: "São Paulo Julho",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "R$ 764"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/italia.webp") : require("./assets/imagem/carregando.png"),
            titulo: "Pacote Itália",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "R$ 3.676"
        },
        {
            id: uuid(),
            imagem: rede ? require("./assets/imagem/mexico.jpg") : require("./assets/imagem/carregando.png"),
            titulo: "México Maio 2026",
            hospedagem: "A Mais cara",
            transporte: "O Mais rápido",
            preco: "R$ 1.867"
        }
    ];


    if (detalhe) {
        return (<DetalhePacote titulo={titulo} imagem={imagem} preco={preco} setDetalhe={setDetalhe} />)
    }

    return (
        <View >
            <FlatList
                style={css.container}
                data={roteiros}
                renderItem={({ item }) => <Pacote titulo={item.titulo} imagem={item.imagem} hospedagem={item.hospedagem} transporte={item.transporte} preco={item.preco} setDetalhe={setDetalhe} setTitulo={setTitulo} setImagem={setImagem} setPreco={setPreco} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

const css = StyleSheet.create({
    container: {
        width: "100%"
    }
});
