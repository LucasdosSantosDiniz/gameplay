import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100',
        flexDirection: "row",
        alignItems: "center"

    },
    
    titulo:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },

    nameStatus:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13
    },

    status:{
        flexDirection: "row",
        alignItems: "center"
    },

    statusMarcado:{
        width: 8,
        height: 8,
        borderRadius: 4
    }
})