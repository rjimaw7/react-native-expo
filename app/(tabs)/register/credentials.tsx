import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { router } from "expo-router";
import useAccountStore from "@/store/zustand/useAccountStore";
import Toast from "react-native-toast-message";

const Credentials: React.FC = () => {
  // GLOBAL STORE
  const { email, setEmail, password, setPassword, setHasAccount } =
    useAccountStore();

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    setHasAccount(true);

    Toast.show({
      type: "success",
      text1: "Account Created",
    });

    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Credentials</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
      </View>
      <Button
        title="Create Account"
        onPress={handleSubmit}
        disabled={!email || !password}
        color="#ffa31a"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
    color: "white",
  },
});

export default Credentials;
