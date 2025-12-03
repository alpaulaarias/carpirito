import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// Necesitas tener esta librería instalada: npm install react-native-qrcode-svg
import QrCodeSvg from 'react-native-qrcode-svg';

// --- Tipos ---

type StackParamList = {
    registrarUsuario: undefined; 
    Home: undefined;
    MostrarQR: { userData: { nombre: string; cedula: string; correo: string; id: string } }; 
};

// Definimos el tipo para los datos del usuario que queremos mostrar en el QR
type UserData = { 
    nombre: string; 
    cedula: string; 
    correo: string; 
    id: string 
};

// --- Función Simulación de Registro ---

const registrarUsuario = async (datosUsuario: { 
    nombre: string; 
    correo: string; 
    cedula: string; 
    fechaRegistro: string 
}): Promise<string | null> => {
    console.log("Intentando registrar:", datosUsuario);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'UUID-EJEMPLO-' + Math.floor(Math.random() * 1000); // Retorna un ID simulado
};

// --- Componente Principal (Una Sola Pantalla) ---

const RegistroUsuariosPantalla: React.FC = () => {
 
    // No usamos 'navigation' para navegar, pero se mantiene si se necesita volver a 'Home'
    // const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>(); 

    // Estado para los campos del formulario
    const [nombre, setNombre] = useState("");
    const [cedula, setCedula] = useState("");
    const [correo, setCorreo] = useState("");
    
    // Nuevo estado para almacenar los datos del usuario después del registro (incluye el ID)
    const [userData, setUserData] = useState<UserData | null>(null);

    // Función que maneja el registro y la lógica de cambio de vista
    const guardar = async () => {
        
        if (!nombre || !cedula || !correo) {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }

        try {
            const id = await registrarUsuario({
                nombre,
                correo,
                cedula,
                fechaRegistro: new Date().toISOString(), 
            });

            if (id) {
                Alert.alert("Éxito", "Usuario registrado con ID: " + id);
            
                // 1. Guardar los datos completos del usuario en el estado
                setUserData({
                    nombre,
                    cedula,
                    correo,
                    id // El ID real devuelto por la API simulada
                });

                // 2. Limpiar los campos (opcional si vas a mostrar el QR)
                setNombre('');
                setCedula('');
                setCorreo('');
                
            } else {
                Alert.alert("Error", "No se pudo obtener el ID de registro.");
            }
        } catch (error) {
            console.error("Error al guardar usuario:", error);
            Alert.alert("Error de API", "Hubo un problema al conectar con el servidor.");
        }
    };
    
    // Función para volver al formulario
    const volverARegistrar = () => {
        setUserData(null);
    };

    // --- RENDERIZADO DEL CÓDIGO QR ---
    if (userData) {
        // Convertir los datos del usuario a una cadena JSON para el QR
        const qrData = JSON.stringify(userData); 

        return (
            <View style={style.qrContainerView}>
                <Text style={style.title}>✅ Registro Exitoso</Text>
                <Text style={style.subtitle}>Código QR del Usuario</Text>

                <View style={style.qrBox}>
                    <QrCodeSvg
                        value={qrData}
                        size={200}
                        color="black"
                        backgroundColor="white"
                    />
                </View>

                <Text style={style.detailText}>
                    **ID de Registro:** {userData.id}
                </Text>
                <Text style={style.detailText}>
                    **Nombre:** {userData.nombre}
                </Text>
                
                <TouchableOpacity style={[style.btn, { backgroundColor: '#FF6B6B', marginTop: 30 }]} onPress={volverARegistrar}>
                    <Text style={style.btnText}>Volver a Registrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    // --- RENDERIZADO DEL FORMULARIO ---
    return (
        <View style={style.container}>
            <Text style={style.title}>Registrar Usuario</Text>

            <TextInput
                style={style.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={style.input}
                placeholder="Cédula"
                value={cedula}
                onChangeText={setCedula}
                keyboardType="numeric" 
            />

            <TextInput
                style={style.input}
                placeholder="Correo"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address" 
            />

            <TouchableOpacity style={style.btn} onPress={guardar}>
                <Text style={style.btnText}>Guardar y Generar QR</Text>
            </TouchableOpacity>
        </View>
    );
};

// --- Estilos ---

const style = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: "center" },
    qrContainerView: { flex: 1, padding: 20, justifyContent: "center", alignItems: 'center' }, // Estilo para la vista QR
    title: { fontSize: 24, textAlign: "center", marginBottom: 10, fontWeight: 'bold' },
    subtitle: { fontSize: 18, textAlign: "center", marginBottom: 20, color: '#006D77' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5, width: '100%' },
    btn: { backgroundColor: "#006D77", padding: 15, borderRadius: 10, width: '100%', marginTop: 10 },
    btnText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
    qrBox: { marginBottom: 30, padding: 15, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
    detailText: { fontSize: 16, marginBottom: 5, textAlign: 'center', width: '100%' },
});

export default RegistroUsuariosPantalla;