import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    container:{
        width: 105,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,
    
    },

    conteudo:{
        width: 100,
        height: 100,
        borderRadius: 8,
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "space-between"
    },

    titulo:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize:15
    },

    check:{
        position: "absolute",
        top: 7,
        right:7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius:3
    },
    checked:{
        position: "absolute",
        top: 7,
        right:7,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        borderRadius:3
    }
})