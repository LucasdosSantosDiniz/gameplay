import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    container:{
        width: 48,
        height: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
})