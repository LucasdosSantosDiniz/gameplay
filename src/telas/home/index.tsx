import React, {useState} from "react";
import { View, FlatList, Text} from "react-native";
import { styles } from "./styles";
import { Profile } from "../../componentes/Profile";
import { ButtonAdd } from "../../componentes/ButtonAdd";
import { CategoriasSelect } from "../../componentes/CategoriasSelect";
import { ListenHeader } from "../../componentes/ListHeader";
import { Compromissos } from "../../componentes/Compromissos";
import { DividirLista } from "../../componentes/DividirLista";
import { Background } from '../../componentes/Background';
import { useNavigation } from "@react-navigation/native";

// View é uma especie de div

export function Home() {
    const compromissos = [
    {
        id: '1',
        guild:{
            id:'1',
            name: 'Lendários',
            icon: null,
            propietario: true
        },
        categoria: '1',
        data: '22/06 as 20:40',
        descricao: 'Vim pra vencer'
    },
    { 
        id: '2',
        guild:{
            id:'1',
            name: 'Lendários',
            icon: null,
            propietario: false
        },

        categoria: '3',
        data: '22/06 as 20:30',
        descricao: ' sou o maior'
    },
]

    const navegacao = useNavigation()
    function tratarDetalhesCompromisso() {
        navegacao.navigate('Detalhes')
    }
    
    const [categoria, setCategoria] = useState('');
    function selecaoCategoria(categoriaID: string) {
        categoriaID === categoria ? setCategoria (''): setCategoria(categoriaID)
    }

    return(
        <Background> 
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>

                <CategoriasSelect  categoriaSelecionada={categoria} setCategoria={selecaoCategoria}/>

                <View style={styles.conteudo}>
                    <ListenHeader title=" Partidas marcadas" subTitle=" Total 6"/>

                    <FlatList 
                        data={compromissos}
                        keyExtractor={item => item.id}
                        renderItem ={({ item }) => (
                            <Compromissos data={ item } onPress={tratarDetalhesCompromisso}/>
                        )}
                        ItemSeparatorComponent = {() => <DividirLista/> }
                        style={styles.matches}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
        </Background>
        
    )
}