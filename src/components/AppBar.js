import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppBar(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>Todo Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    //backgroundColor: "#4281a4",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "#eb5e28",
    fontSize: 30,
    fontWeight: "600",
    textTransform: "uppercase"
  }
});
