import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';


import PresentacionPantalla from './src/PresentacionPantalla';
// Asumo que tienes una pantalla de Registro real

import EscanerPantalla from './src/EscanerPantalla';


const Stack = createNativeStackNavigator();


const MainNavigator = () => {
  
    const { usuario } = useContext(UserContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
            
         
            {!usuario ? (
                <>
                    <Stack.Screen name="Presentacion" component={PresentacionPantalla} />
                    
                    
                </>
            ) : (
               
                <>
                  
                    <Stack.Screen name="Escaner" component={EscanerPantalla} />
                    {/* Agrega aquí más rutas de la aplicación autenticada */}
                </>
            )}
        </Stack.Navigator>
    );
};

export default MainNavigator; // Agrega la exportación para usarlo en App.tsx