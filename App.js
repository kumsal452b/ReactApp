import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoals, setEnterGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoals]);
    console.log(courseGoals);
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
      <ScrollView>
        {courseGoals.map((goal) => (
          <View style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
    marginBottom: 5,
  },
  listItem: {
    padding: 10,
    backgroundColor:
      "radial-gradient(circle, rgba(58,151,221,1) 42%, rgba(24,40,87,1) 100%)",
    borderColor: "black",
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomEndRadius: 15,
  },
});
