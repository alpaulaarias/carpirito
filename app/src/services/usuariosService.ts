// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../firebaseConfig";

// export const registrarUsuario = async (usuario: any) => {
//   try {
//     const docRef = await addDoc(collection(db, "usuarios"), usuario);
//     return docRef.id;
//   } catch (err) {
//     console.log("Error guardando usuario:", err);
//     return null;
//   }
// };
// app/src/services/postgresService.ts (o apiService.ts)

import axios from 'axios';

// ⚠️ Usar la IP del host si estás en un emulador/dispositivo
const BASE_URL = 'http://10.0.2.2:3000'; 

// --- Función de ejemplo para PostgreSQL ---

// Esta función llama a tu ruta POST /users de tu servidor Express
export const crearUsuarioPostgres = async (userData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error al crear usuario en Postgres API:", error);
    throw error;
  }
};