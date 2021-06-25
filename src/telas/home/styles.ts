import { StyleSheet } from "react-native"; // StyleSheet é uma propriedade do React Native
import { theme } from "../../global/estilos/theme"; // O Theme é um arquivo da pasta global, onde as estilizações serve para todo o App
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({ // Função de estilização da Inteface do App
    container:{
        flex: 1,
    },

    header:{
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },

    conteudo:{
        marginTop: 42
    },

    matches:{
        marginTop:24,
        marginLeft: 24
    }

  
})