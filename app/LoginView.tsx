import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const LoginView = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue.</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

      <TouchableOpacity onPress={() => console.log("Forgot Password Clicked")}>
        <Text style={styles.forgotPassword}>FORGOT?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Don't have an account?{" "}
        <Text style={styles.link} onPress={() => router.replace("/SignupView")}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: "center", justifyContent: "center", padding: 20, backgroundColor: "#fff", width: "60%" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#888", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "bold", marginTop: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginTop: 5 },
  forgotPassword: { color: "#f90", textAlign: "right", marginTop: 5 },
  button: { backgroundColor: "#f90", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  bottomText: { textAlign: "center", marginTop: 20, fontSize: 14 },
  link: { color: "#f90", fontWeight: "bold" },
});

export default LoginView;
