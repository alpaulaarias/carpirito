// types/types.ts
import { ImageSourcePropType } from 'react-native';

export type ComponenteData = {nombre: string; imagen: ImageSourcePropType; };

export type StackParamList = {
  Presentacion: undefined;
  Inicio: undefined;
  EscanerPantalla: undefined;
  registrarUsuario: undefined; // Clave de ruta
  EscanerQR: undefined; // La nueva pantalla de escaneo
  DetalleUsuario: { userData: { id: string; cedula: string } };

};