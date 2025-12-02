import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const registrarUsuario = async (usuario: any) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), usuario);
    return docRef.id;
  } catch (err) {
    console.log("Error guardando usuario:", err);
    return null;
  }
};
