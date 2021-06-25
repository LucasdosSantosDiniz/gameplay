
import React, { useState} from 'react'; // Dentro das chaves são importados os componentes e estados do React
import { Text, View, Image,StatusBar } from 'react-native'; // Dentro das chaves são importados os componentes e estados do React Native
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style'; // Dentro das chaves são importados os componentes e estados do style.ts
import { ButtonIcon } from '../../componentes/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../componentes/Background';

export function Entrar() {
    // Tudo que é dentro do return é um componente

    const acessarHome = useNavigation();

    function acessoPaginaPrinicipal() {
        acessarHome.navigate('Home');
    }
    
    return (
        <Background>
            <View style={styles.container}>
                <Image 
                    source={IllustrationImg}
                    style={styles.imagem}
                    resizeMode='stretch'
                />

                <View style={styles.conteudo}>
                        <Text style={styles.titulo}>
                            Marque 
                            suas partidas
                            de forma prática.
                        </Text>

                        <Text style={styles.subTitulo}>
                            Monte um grupo com seus parças.{`\n`} E jogue juntos, o seus games favoritos.
                        </Text>

                        <ButtonIcon title = "Entrar com Discord " onPress={acessoPaginaPrinicipal}/>
                </View>
            </View>
        </Background>
      );
}

