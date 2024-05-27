import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import useAccountStore from "@/store/zustand/useAccountStore";

const ChildrenList: React.FC = () => {
  // GLOBAL STORE
  const { childrenList, setChildrenList } = useAccountStore();

  const addChild = () => {
    if (childrenList.length < 10) {
      setChildrenList([...childrenList, ""]);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newChildrenList = [...childrenList];
    newChildrenList[index] = value;
    setChildrenList(newChildrenList);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Children List</Text>
      {childrenList.map((child, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>Child {index + 1} Name:</Text>
          <TextInput
            style={styles.input}
            value={child}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Add Child"
          onPress={addChild}
          disabled={childrenList.length === 10}
          color="#ffa31a"
        />
        <Button
          title="Submit"
          color="#ffa31a"
          onPress={() => router.navigate("/register/credentials")}
          disabled={
            childrenList.length === 0 ||
            childrenList.every((child) => !child.trim())
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
});

export default ChildrenList;
