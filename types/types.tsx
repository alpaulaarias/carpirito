
import { ImageSourcePropType } from 'react-native';
export type ComponenteData = {nombre: string; imagen: ImageSourcePropType; comoColocar: string[]; informacion: { utilidad: string; mantenimiento: string; }; herramientas: string[]; };
export type StackParamList = {
  
    UserDataScreen: { userId: string }
  Inicio: undefined;
  EscanerPantalla: undefined;
  
  
};