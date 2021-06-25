import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { categoriaPlayer } from "../../utils/categorias";
import { Categorias } from "../Categorias";

type Props = {
    categoriaSelecionada: string;
    setCategoria: (categoriaID: string) => void;
    hasCheckBox?: boolean
}

// ScrollView serve pra ativar a rolagem dos elementos da pagina

export function CategoriasSelect({categoriaSelecionada, setCategoria, hasCheckBox = false}:Props) {
    return(
        <ScrollView  horizontal style={styles.container} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:40}}> 
            {
                categoriaPlayer.map( categoriaJogo => {
                     return <Categorias
                            key={categoriaJogo.id}
                            title={categoriaJogo.title}
                            icon={categoriaJogo.icon}
                            checked={categoriaJogo.id === categoriaSelecionada}
                            onPress={() => setCategoria(categoriaJogo.id)}
                            hasCheckBox={hasCheckBox}
                         />
                })
            }  
        </ScrollView>
    )
}