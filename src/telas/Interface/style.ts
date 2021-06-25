import { StyleSheet } from "react-native"; // StyleSheet é uma propriedade do React Native
import { theme } from "../../global/estilos/theme"; // O Theme é um arquivo da pasta global, onde as estilizações serve para todo o App

export const styles = StyleSheet.create({ // Função de estilização da Inteface do App
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagem:{
        width: '100%',
        height: 360
    },

    conteudo:{
        marginTop: -10,
        paddingHorizontal: 50
    },

    titulo:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        marginBottom: 16,
        lineHeight: 40
    },

    subTitulo:{
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        marginBottom: 64,
        lineHeight: 25
    }

})