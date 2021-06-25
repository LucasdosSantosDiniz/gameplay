import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../telas/home";
import { Entrar } from "../telas/Interface";
import { theme } from "../global/estilos/theme";
import { Detalhes } from "../telas/detalhesCompromisso";


const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator headerMode ="none" screenOptions={{cardStyle:{backgroundColor: theme.colors.secondary100}}}>
            <Screen name= "Entrar" component={Entrar}/>

            <Screen name= "Home" component={Home}/>

            <Screen name = "Detalhes" component={Detalhes}/>

            
        </Navigator>
    )
}

