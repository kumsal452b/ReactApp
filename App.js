import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoals, setEnterGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnterGoal(enteredGoals);
  }
  const addGoalHandler = () => {
    console.log(enteredGoals);
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Add new course"
          onChangeText={goalInputHandler}
          value={enteredGoals}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  input: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
  },
});
