import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import useAccountStore from "@/store/zustand/useAccountStore";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  // GLOBAL STORE
  const {
    hasAccount,
    firstName,
    email,
    gender,
    childrenList,
    password,
    clearFields,
  } = useAccountStore();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {!hasAccount ? (
        <TouchableOpacity
          onPress={() => router.navigate("/register")}
          style={styles.createAccountButton}
        >
          <Text style={styles.createAccountButtonText}>Create An Account</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.userDataContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name:</Text>
            <Text style={styles.value}>{firstName}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{gender}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                value={password}
                secureTextEntry={!showPassword}
                editable={false}
              />
              <MaterialIcons
                name={showPassword ? "visibility-off" : "visibility"}
                size={24}
                color="#777"
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Children List:</Text>
            {childrenList.map((child, index) => (
              <TextInput
                key={index}
                style={styles.input}
                value={child}
                placeholder={`Child ${index + 1}`}
                editable={false}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Edit Account"
              onPress={() => {
                router.navigate("/register");
              }}
              color="#ffa31a"
            />
            <Button
              title="Delete Account"
              onPress={() => {
                clearFields();

                Toast.show({
                  type: "info",
                  text1: "Account Deleted",
                });
              }}
              color="#ffa31a"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userDataContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    alignSelf: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  passwordInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 8,
  },
  linkStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffa31a",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffa31a",
    marginBottom: 10,
  },
});
