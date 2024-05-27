import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { router } from "expo-router";
import useAccountStore from "@/store/zustand/useAccountStore";

const Index = () => {
  // GLOBAL STORE
  const { setFirstName, firstName } = useAccountStore();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <Button
        title="Submit"
        onPress={() => {
          router.navigate("/register/gender");
        }}
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

export default Index;
