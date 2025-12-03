// src/services/userContext.tsx

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

// --- TIPOS DE TYPESCRIPT ---

// Define el tipo de dato que tendrá el contexto
interface UserContextType {
  isRegistered: boolean;
  isLoading: boolean;
  markUserAsRegistered: () => Promise<void>;
  // Opcionalmente, una función para cerrar sesión si la necesitaras:
  // logout: () => Promise<void>; 
}

// Define el valor inicial del contexto
const initialContextValue: UserContextType = {
  isRegistered: false,
  isLoading: true, // Indica que aún estamos cargando el valor de AsyncStorage
  markUserAsRegistered: async () => {}, // Función de placeholder
};

// --- CREACIÓN DEL CONTEXTO ---

// 1. Crea el contexto
const UserContext = createContext<UserContextType>(initialContextValue);

// 2. Hook para usar el contexto fácilmente
export const useUser = () => useContext(UserContext);

// --- COMPONENTE PROVEEDOR (PROVIDER) ---

// Define el tipo para las props del proveedor (los children)
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const STORAGE_KEY = 'usuarioRegistrado'; // Clave que usarás en AsyncStorage

  // Efecto para cargar el estado del usuario al iniciar la app
  useEffect(() => {
    const loadRegistrationStatus = async () => {
      try {
        // Lee el valor de AsyncStorage
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);
        // Si el valor es "true", marca al usuario como registrado
        setIsRegistered(storedValue === 'true');
      } catch (error) {
        console.error("Error al cargar el estado de registro:", error);
      } finally {
        setIsLoading(false); // La carga ha terminado
      }
    };

    loadRegistrationStatus();
  }, []);


  const markUserAsRegistered = async () => {
    try {
      
      await AsyncStorage.setItem(STORAGE_KEY, 'true');
      
      setIsRegistered(true);
      
      

    } catch (error) {
      console.error("Error al guardar el estado de registro:", error);
    }
  };

 
  const contextValue: UserContextType = {
    isRegistered,
    isLoading,
    markUserAsRegistered,
  };

  return (
    <UserContext.Provider value={contextValue}>
      
      {children}
    </UserContext.Provider>
  );
};