import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Todo(props) {
  
  const [title, setTitle] = useState('');

  return (
    <View style={styles.todo}>
      <TextInput 
        placeholder="Add a todo" 
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
      <Button 
        title="Add" 
        color="#4281a4"
        onPress={props.addTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 2,
    borderColor: "#4281a4",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});
