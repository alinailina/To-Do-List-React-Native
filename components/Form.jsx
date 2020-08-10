import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const changeHandler = (val) => {
    setTitle(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a task..."
        onChangeText={changeHandler}
        value={title}
      />
      <TouchableOpacity style={styles.button} onPress={() => addTodo(title)}>
        <Text style={styles.buttonText}>Add a task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "OpenSans_300Light",
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderColor: "#4ecdc4",
    borderWidth: 1,
    borderRadius: 5,
  },

  button: {
    fontFamily: "OpenSans_400Regular",
    alignItems: "center",
    backgroundColor: "#ffe66d",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Form;
