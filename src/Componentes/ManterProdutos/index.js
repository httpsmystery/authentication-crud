import { View, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarProdutos, atualizarProdutos } from "../../servicos/firestore";

export function ManterProdutos({ navigation, route }) {
    const [nomeAnime, setNomeAnime] = useState(route?.params?.nomeAnime)
    const [estudioAnime, setestudioAnime] = useState(route?.params?.estudioAnime)
    const [qtdEpisodios, setqtdEpisodios] = useState(route?.params?.qtdEpisodios)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    async function salvarProduto() {
        if (nomeAnime == '') {
            setStatusErro('Nome do Anime')
            setMensagemErro('O campo não pode ser vazio')
        } else if (estudioAnime == '') {
            setStatusErro('Estúdio')
            setMensagemErro('O anime deve ter um estúdio')
        } else if (qtdEpisodios == '') {
            setStatusErro('Quantidade de Episódios')
            setMensagemErro('O anime deve ter 1 ou mais episódios')
        } else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarProdutos(route?.params?.id, { nomeAnime, estudioAnime, qtdEpisodios })
            }
            else {
                resultado = await cadastrarProdutos({ nomeAnime, estudioAnime, qtdEpisodios })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar produto')
            } else {
                setNomeAnime('')
                setestudioAnime('')
                setqtdEpisodios('')
                navigation.navigate('ListarProdutos') 
            }
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                label="Nome do Anime"
                value={nomeAnime}
                onChangeText={setNomeAnime}
                mode="outlined"
                error={statusErro == 'Nome do Anime'}
                style={estilos.input} />
            {statusErro == 'Nome do Anime' ? <HelperText type="error" visible={statusErro == 'Nome do Anime'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Estúdio"
                value={estudioAnime}
                onChangeText={setestudioAnime}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Estúdio' ? <HelperText type="error" visible={statusErro == 'Estúdio'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Quantidade de Episódios"
                value={qtdEpisodios}
                onChangeText={setqtdEpisodios}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Quantidade de Episódios' ? <HelperText type="error" visible={statusErro == 'Quantidade de Episódios'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarProduto()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}