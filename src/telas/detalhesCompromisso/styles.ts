import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    banner:{
        width: '100%',
        height: 234,
        marginBottom: 30
    },

    conteudoBanner:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
        marginBottom:30
    },

    titulo:{
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },

    subTitulo:{
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },

    jogadores:{
        marginLeft: 24,
        marginTop: 27
    }
})