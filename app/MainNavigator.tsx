import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StackParamList } from './types/types';



// importacion de pantallas 
import EscanerQr from "./src/screens/EscanerQr";

// import Inicio from "./src/screens/Inicio";
import PresentacionPantalla from "./src/screens/PresentacionPantalla";
import Formulario from "./src/screens/formulario";
const Stack = createNativeStackNavigator<StackParamList>(); 

function MainAppNavigator() {
    return (
        <Stack.Navigator 
            id="MainStack"
            screenOptions={{ headerShown: false }}
            initialRouteName="Presentacion" 
        >
            {/* 🔹 Pantalla inicial */}
            <Stack.Screen name="Presentacion" component={PresentacionPantalla} />

            {/* 🔹 Pantalla del formulario */}
            <Stack.Screen name="registrarUsuario" component={Formulario} />

            {/* 🔹 Resto del flujo */}
            {/* <Stack.Screen name="Inicio" component={Inicio} /> */}
            <Stack.Screen name="EscanerQR" component={EscanerQr} /> 
            <Stack.Screen name="DetalleUsuario" component={DetalleUsuarioPantalla} />
        </Stack.Navigator>
    );
}

export default MainAppNavigator;