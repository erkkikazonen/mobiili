import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function CalculatorScreen({ navigation }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [maths, setMaths] = useState([]);

  const handleSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult("Result: " + sum);
    handleAdd(`${number1} + ${number2} = ${sum}`);
  };

  const handleDif = () => {
    const dif = parseFloat(number1) - parseFloat(number2);
    setResult("Result: " + dif);
    handleAdd(`${number1} - ${number2} = ${dif}`);
  };

  const handleAdd = (history) => {
    setMaths([...maths, history]);
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
      <View style={styles.Button}>
        <Button title="+" onPress={handleSum} />
        <Button title="-" onPress={handleDif} />
      </View>
      <View style={styles.Button}>
        <Button
          title="History"
          onPress={() => navigation.navigate("History", { maths })}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function HistoryScreen({ route }) {
  const { maths } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ flexDirection: "row", alignItems: "center" }}>
        History
      </Text>
      <FlatList
        data={maths}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={{ fontSize: 18 }}>{item}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    width: "20%",
    margin: 20,
  },
  listItem: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    padding: 10,
  },
});
