import { StyleSheet } from "react-native";

export default StyleSheet.create({
    botao: {
        position: 'absolute', //Ficar em qualquer lugar da tela
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: '#748cfc',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: '500',
    },
})
