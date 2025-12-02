import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

import EscanerPantalla from "./src/screens/EscanerPantalla";
import PresentacionPantalla from "./src/screens/PresentacionPantalla";


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
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
        <Stack.Screen name="Presentacion" component={PresentacionPantalla} />
      ) : (
        <>
          <Stack.Screen name="Escaner" component={EscanerPantalla} />
         
        </>
      )}
    </Stack.Navigator>
  );
}
