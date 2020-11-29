import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  return (
    <View style={styles.listTile}>
      <Icon
        name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
        style={styles.leading}
        size={20}
        color="#4281a4"
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text style={styles.title}>{props.todo.name}</Text>
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="#4281a4"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "60vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f6f5f3",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#4281a4",
    marginBottom: "15px"
  },
  leading: {
    //width: "2%"
  },
  title: {
    width: "90%",
    fontSize: 18
  },
  trailing: {
    //width: "10%"
  }
});
