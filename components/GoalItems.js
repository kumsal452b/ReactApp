import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
        <Text>{props.id}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
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
export default GoalItem;
