
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackParamList } from '../../types/types';

type PresentationScreenNavigationProp =
  NativeStackNavigationProp<StackParamList, 'Presentacion'>;

const PresentacionPantalla = () => {

  const navigation = useNavigation<PresentationScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.title}>CARPARITO</Text>
        <Text style={styles.subtitle}>TE QUIERO MUCHO</Text>

        <View style={styles.buttonContainer}>

          {/* ✔ Navegar al formulario */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('registrarUsuario')}
          >
            <Text style={styles.buttonText}>Registrar Usuario</Text>
          </TouchableOpacity>

          {/* ✔ Navegar al escáner */}
          <TouchableOpacity
            style={[styles.button, styles.registerButton]}
            onPress={() => navigation.navigate('EscanerQR')}
          >
            <Text style={styles.registerButtonText}>Escanear QR</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
};

export default PresentacionPantalla;

// Estilos ↓
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    marginTop: 150,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4d82bc',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: "#fff",
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});