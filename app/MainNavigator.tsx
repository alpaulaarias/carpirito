import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { UserProvider } from './src/services/userContext';


import EscanerQr from "./src/screens/EscanerQr";
// import PresentacionPantalla from "./src/screens/PresentacionPantalla"; 
// Nota: No necesitas importar StackParamList aquí, úsalo en tus Hooks y componentes.

const Stack = createNativeStackNavigator();


function MainAppNavigator() {
    const [usuario, setUsuario] = useState<boolean | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            const u = await AsyncStorage.getItem("usuario");
            setUsuario(u === "true");
        };
        loadUser();
    }, []);

   
    if (usuario === null) return null;

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!usuario ? (
            // ✅ RAMA 1: Usuario Nuevo o Intro. (Pon la primera pantalla que vean)
            // Usa un nombre claro, por ejemplo "IntroScanner"
            <Stack.Screen name="IntroScanner" component={EscanerQr} />
            // O si usas PresentacionPantalla: 
            // <Stack.Screen name="Presentacion" component={PresentacionPantalla} />
        ) : (
            // ✅ RAMA 2: Solución 2: Llenar este bloque con las pantallas principales.
            // Si la app principal es solo el escáner:
            <Stack.Screen name="MainScanner" component={EscanerQr} />
            /*
            O si tienes varias pantallas:
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </>
            */
        )}
    </Stack.Navigator>
    );
}
// ----------------------------------------------------


export default function App() {
    return (
       
        <UserProvider>
          
            <NavigationContainer>
                <MainAppNavigator />
            </NavigationContainer>
        </UserProvider>
    );
}