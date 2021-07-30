import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoals, setEnterGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new course"
          onChangeText={goalInputHandler}
          value={enteredGoals}
          style={styles.input}
        />
        <Button
          title="Add"
          onPress={props.onAddGoal.bind(this, enteredGoals)}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
  },
});
export default GoalInput;
