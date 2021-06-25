import React from "react";
import { View,Text } from "react-native";
import { styles } from "./styles";

type Props ={
    title: string;
    subTitle: string;

}

export function ListenHeader({title, subTitle}:Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Titulo}>
                {title}
            </Text>

            <Text style={styles.subTitulo}>
                {subTitle}
            </Text>
        </View>
    )
}


