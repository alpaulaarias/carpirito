import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { StackParamList } from '../../../types/types'; // Ajusta el path si es necesario


// Define el tipo de navegación específica para esta pantalla
type EscanerQRNavigationProp = NativeStackNavigationProp<StackParamList, 'EscanerQR'>;

const EscanerQr: React.FC = () => {
    
    const navigation = useNavigation<EscanerQRNavigationProp>();
    
    // Función que se ejecuta cuando el escáner lee un código
    const onSuccess = (e: { data: string }) => {
        
        const rawData = e.data;
        
        try {
            // 1. Intentar parsear el contenido (el esquema JSON que generaste)
            const scannedData = JSON.parse(rawData);

            // 2. Validar que contenga los campos mínimos
            // ¡IMPORTANTE! Asegúrate que 'DetalleUsuario' está definida en tu StackParamList
            if (scannedData.id && scannedData.cedula) {
                
                // Si la data es correcta, navegar a la pantalla de detalle
                navigation.navigate('DetalleUsuario', {
                    userData: {
                        id: scannedData.id,
                        cedula: scannedData.cedula
                    }
                });

            } else {
                Alert.alert("Error", "El código QR escaneado no tiene el formato de usuario esperado.");
            }

        } catch (jsonError) {
            // Si no se puede parsear como JSON (ej: escaneó una URL simple o texto plano)
            Alert.alert("Error de Formato", "El código escaneado no es un JSON válido o no es un código de usuario.");
            console.log("Contenido escaneado:", rawData);
        }
    };

    return (
        <QRCodeScanner
            onRead={onSuccess}
            // Asegúrate de que RNCamera esté instalado y configurado correctamente para que esto funcione
            flashMode={RNCamera.Constants.FlashMode.off} 
            topContent={
                <Text style={styles.centerText}>
                    Apunta la cámara al <Text style={styles.textBold}>Código QR</Text> del usuario.
                </Text>
            }
            bottomContent={
                // No siempre hay una pantalla anterior, si esta es la inicial, puedes navegar a 'Home'
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
            }
        />
    );
};


const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
        textAlign: 'center',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});

export default EscanerQr;