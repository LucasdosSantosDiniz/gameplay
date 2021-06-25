import React from "react";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"; // propriedade de Botão do React native
import { MaterialCommunityIcons} from '@expo/vector-icons'; // Icones que vem expo
import { theme } from "../../global/estilos/theme";

export function ButtonAdd({...rest} : RectButtonProps) {
    return(
        <RectButton style={styles.container} {...rest}>
            <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
        </RectButton>
    )
}