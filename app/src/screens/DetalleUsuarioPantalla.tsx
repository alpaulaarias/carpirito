import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../../../types/types'; // Ajusta el path si es necesario

type DetalleUsuarioRouteProp = RouteProp<StackParamList, 'DetalleUsuario'>;

// Simulación de la conexión al Backend para obtener el nombre/correo usando el ID
// (Mantenemos la simulación aquí, reemplaza con tu llamada a la API real)
const fetchUserData = async (id: string, cedula: string) => {
    // Simulación:
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    return {
        id: id,
        cedula: cedula,
        nombreCompleto: "Usuario Verificado (API Simulado)",
        correoElectronico: "verificado@ejemplo.com",
        fechaVerificacion: new Date().toLocaleTimeString(),
    };
}


const DetalleUsuarioPantalla: React.FC = () => {
    const route = useRoute<DetalleUsuarioRouteProp>();
    const { userData } = route.params;
    const [detalle, setDetalle] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    
    // El 'navigation' no se usa aquí, así que no lo importamos.

    useEffect(() => {
        const loadDetails = async () => {
            try {
                const data = await fetchUserData(userData.id, userData.cedula);
                setDetalle(data);
            } catch (error) {
                Alert.alert("Error", "No se pudieron cargar los detalles del usuario.");
            } finally {
                setLoading(false);
            }
        };
        loadDetails();
    }, [userData.id]);

    if (loading) {
        return (
            <View style={styles.resultContainer}>
                <Text style={styles.centerText}>Cargando detalles del ID: {userData.id}...</Text>
            </View>
        );
    }

    return (
        <View style={styles.resultContainer}>
            <Text style={styles.title}>👤 Usuario Escaneado</Text>
            <View style={styles.detailsBox}>
                <Text style={styles.detailText}>**ID Único (QR):** {detalle.id}</Text>
                <Text style={styles.detailText}>**Cédula (QR):** {detalle.cedula}</Text>
                <Text style={styles.detailText}>**Nombre (Verificado):** {detalle.nombreCompleto}</Text>
                <Text style={styles.detailText}>**Correo (Verificado):** {detalle.correoElectronico}</Text>
                <Text style={[styles.detailText, styles.verification]}>
                    Verificado a las: {detalle.fechaVerificacion}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        fontSize: 18,
        color: '#777',
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#006D77'
    },
    detailsBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 10,
    },
    verification: {
        marginTop: 15,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default DetalleUsuarioPantalla;