import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type StackParamList = {
   registrarUsuario: undefined; 
  Home: undefined;
};

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

const RegistroUsuariosPantalla: React.FC = () => {
 
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");

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
        // Usar ISOString es bueno para enviar fechas a la API/DB
        fechaRegistro: new Date().toISOString(), 
      });

      if (id) {
        Alert.alert("Éxito", "Usuario registrado con ID: " + id);
      
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
        <Text style={style.btnText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  btn: { backgroundColor: "#006D77", padding: 15, borderRadius: 10 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});

// Exportación única y correcta
export default RegistroUsuariosPantalla;