import React from "react";
import { View, Text } from "react-native";
import { RectButton,RectButtonProps } from "react-native-gesture-handler";
import PlayerSvg from '../../assets/player.svg';
import CalendarioSvg from '../../assets/calendar.svg'
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { categoriaPlayer } from "../../utils/categorias";
import { theme } from "../../global/estilos/theme";


export type GuildProps = {
    id: string
    name: string
    icon: null,
    propietario: boolean
}

export type CompromissosProps = {
    id: string,
    guild: GuildProps,
    categoria: string,
    data:string,
    description:string
}

type Props = RectButtonProps &{
    data:CompromissosProps
}

export function Compromissos({data, ...rest}:Props) {
    const [categoria] = categoriaPlayer.filter(item => item.id === data.categoria)
    const {propietario} = data.guild;
    const {primary, on} = theme.colors;
    return(
        <RectButton {...rest}>
             <View style={styles.container}>
                <GuildIcon/>

                <View style={styles.conteudo}> 
                    <View style={styles.header}>
                        <Text style={styles.titulo}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.categorias}>
                            {categoria.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.infoData}>
                            <CalendarioSvg/>

                            <Text style={styles.date}>
                                {data.data}
                            </Text>
                        </View>

                        <View style={styles.playInfo}>
                            <PlayerSvg fill={propietario ? primary: on}/>

                            <Text style={[styles.players,{color: propietario ? primary : on}]}>
                                    {propietario? ' Anfitrião ': ' Visitante '}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </RectButton>
    )
}