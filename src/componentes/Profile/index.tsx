import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Profile() {
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/LucasdosSantosDiniz.png"/>
            
            <View>
                <View style={styles.usuario}>
                    <Text style={styles.saudacoes}>
                        Olá
                    </Text>

                    <Text style={styles.username}>
                        LUCAS
                    </Text>
                </View>

                <Text style={styles.mensagem}>
                    Hoje é dia de vitoria
                </Text>
            </View>
        </View>
    )
}