import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
        <Ionicons name="ios-remove" size={24} color="#4ecdc4" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    borderColor: "#4ecdc4",
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontFamily: "OpenSans_300Light",
    fontSize: 20,
  },
});

export default TodoItem;
