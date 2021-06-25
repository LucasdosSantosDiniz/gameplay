import React, { ReactNode } from "react";
import{Text, View} from "react-native";
import { theme } from "../../global/estilos/theme";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string,
    action?: ReactNode,
}

export function Header({title, action}:Props) {

    const navegacao = useNavigation()
    function detalhesGoBack() {
        navegacao.goBack()
    }

    const {secondary100, secondary40, heading} = theme.colors

    return(
       <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
           <BorderlessButton onPress={detalhesGoBack}>
               <Feather name="arrow-left" size={24} color={heading}/>
           </BorderlessButton>

           <Text style={styles.titulo}>
               {title}
           </Text>

           {
               action &&
               <View>
                   {action}
               </View>
           }
       </LinearGradient>
       
    );
}