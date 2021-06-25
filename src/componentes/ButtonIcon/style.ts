import { StyleSheet } from "react-native";
import { theme } from "../../global/estilos/theme";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 56,
        backgroundColor:'#7085D5',
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    titulo:{
        flex: 1,
        color: '#FFF',
        fontSize: 15,
        textAlign: "center"
    },

    iconWrapper:{
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },

    icon:{
        width: 24,
        height: 18
    }
})