import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create ({
    container:{
        width: '100%',
        flexDirection: "row",
        alignSelf: "center",
    },

    conteudo:{
        flex:1
    },

    header:{
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    
    },

    titulo:{
        fontFamily: theme.fonts.title700,
        color:theme.colors.heading,
        fontSize: 18,
    },

    categorias:{
        fontFamily:theme.fonts.text400,
        color:theme.colors.highlight,
        fontSize: 13,
        marginRight: 24,
    },

    footer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    infoData:{
        flexDirection: "row",
        alignItems: "center",
    },

    playInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20
       
    },

    date:{
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize:13,
        marginLeft: 7,
    },

    players:{
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize:14,
    }
})