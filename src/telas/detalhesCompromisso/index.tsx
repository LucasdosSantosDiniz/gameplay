import React from "react";
import{ImageBackground, Text, View, FlatList} from "react-native";
import BannerImg from "../../assets/banner.png"
import { Background } from "../../componentes/Background";
import { styles } from "./styles";
import { Header } from "../../componentes/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/estilos/theme";
import { ListenHeader } from "../../componentes/ListHeader";
import { Jogadores } from "../../componentes/jogadores";
import { DividirLista } from "../../componentes/DividirLista";

export function Detalhes() {

    const jogador = [
        {
            id: '1',
            username: 'Lucas',
            avatar: 'https://github.com/LucasdosSantosDiniz.png',
            status: 'Disponivel'
        },

        {
            id: '2',
            username: 'Lucas',
            avatar: 'https://github.com/LucasdosSantosDiniz.png',
            status: 'ocupado'
        },
    ]

    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary}/>
                    </BorderlessButton>
                }
            />

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.conteudoBanner}>
                    <Text style={styles.titulo}>
                        Lendários
                    </Text>

                    <Text style={styles.subTitulo}>
                        Os maiores mitos de todos os tempos !!!!!
                    </Text>
                </View>
            </ImageBackground>

            <ListenHeader title="Jogadores" subTitle=" Total 3" />

            <FlatList 
                data = {jogador}
                keyExtractor = {( item => item.id)}
                renderItem = {({item}) => (
                    <Jogadores data={item} />
                )} 
                ItemSeparatorComponent ={() => <DividirLista/>} 
                style={styles.jogadores}
            />
        </Background>
    )
}