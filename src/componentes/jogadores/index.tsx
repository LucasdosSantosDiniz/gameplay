import React from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { theme } from "../../global/estilos/theme";

export type JogadoresProps = {
    id: string,
    username: string,
    avatar: string,
    status: string
}

type Props = {
    data: JogadoresProps
}

export function Jogadores({data}:Props) {
    
    const isOnline = data.status === 'online'

    const {primary, on} = theme.colors

    return(
        <View style={styles.container}>
            <Avatar urlImage={data.avatar} />

            <View>
                <Text style={styles.titulo}>
                    {data.username}
                </Text>

                <View style={styles.status}>
                    <View 
                        style={[
                            styles.statusMarcado,
                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />

                    <Text style={styles.nameStatus}>
                        {isOnline? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>

    )
}