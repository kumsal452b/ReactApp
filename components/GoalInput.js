import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoals, setEnterGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoals);
    setEnterGoal("");
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
        <View style={styles.containerForButton}>
          <View style={styles.buttonAdd}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonAdd}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
        </View>
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
    borderBottomWidth: 1,
    marginBottom: 5,
    width: "80%",
  },
  containerForButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  buttonAdd: {
    width: "40%",
  },
  buttonCan: {
    width: "40%",
  },
});
export default GoalInput;
