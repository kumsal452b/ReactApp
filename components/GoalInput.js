import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
const GoalInput = (props) => {
  const [enteredGoals, setEnterGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Add new course"
        onChangeText={goalInputHandler}
        value={enteredGoals}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoals)} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
  },
});
export default GoalInput;
