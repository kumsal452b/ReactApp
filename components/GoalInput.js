import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoals, setEnterGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };
  const addHandler = function () {
    props.onAddGoal.bind(this, enteredGoals);
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
          <Button title="Add" onPress={addHandler} style={styles.buttonAdd} />
          <Button title="Cancel" />
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
    borderWidth: 1,
    marginBottom: 5,
    width: "80%",
  },
  containerForButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  buttonAdd: {
    width: "60%",
  },
  buttonCan: {
    width: "40%",
  },
});
export default GoalInput;
