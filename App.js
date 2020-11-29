import React, { useState, useEffect } from "react";
import {StyleSheet, Text, TextInput, View, Button, ScrollView, unstable_batchedUpdates} from "react-native";
import AppBar from "./src/components/AppBar";
import TodoList from "./src/components/TodoList";

export default function App() {
  const [title, setTitle] = useState("");
  const [myText, setMyText] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (title.length > 0) {
      setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      setTitle("");
    }
  };

  const checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => {
      return todo.key !== id;
    }));
  };

  useEffect(() => {
    var checkedCount = todos.filter(todo => todo.isChecked).length;
    var notCheckedCount = todos.filter(todo => !todo.isChecked).length;
    
    setMyText("You have " + checkedCount + " completed and " + notCheckedCount + " TODOs");
    
    console.log(notCheckedCount);
  }, [todos]);

  return (
    <View style={styles.container}>
     
      <AppBar />
      <View style={styles.todo}>
        <TextInput
          placeholder="Add a todo"
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.textbox}
        />
        <Button title="Add" onPress={() => addTodo()} style={styles.buttonToDo} color = "#eb5e28" />
      </View>
     
      <View style={styles.mytext}>
        <Text>{myText}</Text>
      </View>
      
      <ScrollView>
        {todos.map(todo => (
          <TodoList
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  todo: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  textbox: {
    borderWidth: 2,
    borderColor: "#eb5e28",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%"
  },
  mytext:
  {
    marginBottom: "40px",
    fontSize: "30px"
  },
  buttonToDo:
  {
     backgroundColor:"#eb5e28",
     textTransform:"uppercase",
     
  }
});
