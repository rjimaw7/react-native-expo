import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import useAccountStore from "@/store/zustand/useAccountStore";

const GenderScreen = () => {
  // GLOBAL STORE
  const { setGender } = useAccountStore();

  const handleGenderSelect = (gender: "male" | "female") => {
    setGender(gender);
    router.navigate("/register/childrenlist");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGenderSelect("male")}
        >
          <Text style={styles.buttonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGenderSelect("female")}
        >
          <Text style={styles.buttonText}>Female</Text>
        </TouchableOpacity>
      </View>
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
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
  button: {
    backgroundColor: "#ffa31a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GenderScreen;
