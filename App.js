import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const styles = StyleSheet.create({
    container: {
      padding: 50,
      marginTop: 15,
    },
  });
  const addGoalHandler = (enteredGoals) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoals },
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((theGoal) => theGoal.key !== goalId);
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.key}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}
