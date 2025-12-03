// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { StackParamList } from '../../types/types'; // Asegura que la ruta sea correcta

// // Definimos el tipo de navegación para obtener autocompletado.
// // 'Inicio' es la pantalla actual.
// type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Inicio'>;


// export default function InicioScreen() {
//     const navigation = useNavigation<HomeScreenNavigationProp>();

//     // Función para ir a la pantalla del Escáner
//     const handleScan = () => {
//         // // Usamos 'EscanerQR' que es el nombre definido en MainNavigator.tsx
//         navigation.navigate('EscanerQR');
//     };

//     // Función de ejemplo para mostrar más opciones o ir a detalles
//     const handleMoreOptions = () => {
//         alert('Funcionalidad de configuración o historial no implementada.');
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.welcomeText}>¡Bienvenido a CARPARITO!</Text>
//             <Text style={styles.subtitle}>Selecciona una acción para comenzar.</Text>

//             {/* Botón Principal para Escanear QR */}
//             <TouchableOpacity 
//                 style={styles.scanButton} 
//                 onPress={handleScan}
//             >
//                 <Text style={styles.scanButtonText}>Escanear Código QR</Text>
//             </TouchableOpacity>

//             {/* Botón de ejemplo para otras opciones */}
//             <TouchableOpacity 
//                 style={styles.optionsButton} 
//                 onPress={handleMoreOptions}
//             >
//                 <Text style={styles.optionsButtonText}>Ver Historial / Opciones</Text>
//             </TouchableOpacity>

//         </View>
//     );
// }

// // Estilos
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 30,
//         backgroundColor: '#f5f5f5',
//     },
//     welcomeText: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#4d82bc', // Color principal de tu aplicación
//         marginBottom: 10,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: '#666',
//         marginBottom: 50,
//     },
//     scanButton: {
//         backgroundColor: '#4d82bc', // Color de botón primario
//         paddingVertical: 15,
//         paddingHorizontal: 30,
//         borderRadius: 10,
//         width: '100%',
//         marginBottom: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     scanButtonText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         textAlign: 'center',
//     },
//     optionsButton: {
//         backgroundColor: '#fff', 
//         paddingVertical: 15,
//         paddingHorizontal: 30,
//         borderRadius: 10,
//         width: '100%',
//         borderWidth: 1,
//         borderColor: '#ddd',
//     },
//     optionsButtonText: {
//         fontSize: 16,
//         color: '#4d82bc',
//         textAlign: 'center',
//     },
// });