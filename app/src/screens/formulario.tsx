import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { registrarUsuario } from "../services/usuariosService";

export default function RegistroUsuariosPantalla() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");

  const guardar = async () => {
    if (!nombre || !cedula) return;

    const id = await registrarUsuario({
      nombre,
      cedula,
      fechaRegistro: new Date(),
    });

    if (id) alert("Usuario registrado con ID: " + id);
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
      />

      <TouchableOpacity style={style.btn} onPress={guardar}>
        <Text style={style.btnText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15 },
  btn: { backgroundColor: "#006D77", padding: 15, borderRadius: 10 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
