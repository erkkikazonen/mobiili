import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult("Result: " + sum);
  };

  const handleDif = () => {
  const dif = parseFloat(number1) - parseFloat(number2);
  setResult("Result: " + dif);
};


  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setNumber1(text)}
        value={number1}
      />
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setNumber2(text)}
        value={number2}
      />
      <View
        style={styles.Button}>
      <Button title="+" onPress={handleSum} />
      <Button title="-" onPress={handleDif} />
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
  Button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "30%",
    marginTop: 20,
  }
});
