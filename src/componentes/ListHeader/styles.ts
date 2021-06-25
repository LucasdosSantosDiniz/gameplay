import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 24
    },

    Titulo:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 20
    },

    subTitulo:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 14
    }
})