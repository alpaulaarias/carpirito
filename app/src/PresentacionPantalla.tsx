import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackParamList } from '../../types/types';

const PresentacionPantalla: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  

  return (
    
          <View style={styles.content}>
            <Text style={styles.title}>CARPARITO</Text>
            <Text style={styles.subtitle}>TE QUIERO MUCHO</Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Inicio')}
              >
                <Text style={styles.buttonText}>Registra Usuarios</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.button, styles.registerButton]}
                onPress={() => navigation.navigate('EscanerPantalla')}
              >
                <Text style={[styles.buttonText, styles.registerButtonText]}>Escanea Qr</Text>
              </TouchableOpacity>
            </View>
          </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  content: {
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
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
    borderColor: "#006D77",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4d82bc',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: "#006D77",
  },
  registerButtonText: {
    color: '#fff',
  },
});

export default PresentacionPantalla;