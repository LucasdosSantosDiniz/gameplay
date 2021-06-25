import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center"
    },

    usuario:{
        flexDirection: "row"
    },

    saudacoes:{
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },

    username:{
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
    },

    mensagem:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
})