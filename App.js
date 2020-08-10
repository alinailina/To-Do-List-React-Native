import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// Font
import { AppLoading } from "expo";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_300Light,
} from "@expo-google-fonts/open-sans";

// Components
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";

// App
export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_300Light,
  });

  const [todos, setTodos] = useState([
    { id: "1", title: "Walk the dog" },
    { id: "2", title: "Buy milk" },
    { id: "3", title: "Call Grandma" },
  ]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const addTodo = (title) => {
    if (title.length > 5) {
      setTodos((prevTodos) => {
        return [{ title, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Ouch!", "To-do must be over 5 characters long", [
        {
          text: "Dismiss",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.body}>
            <Form addTodo={addTodo} />
            <View style={styles.list}>
              <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} deleteTodo={deleteTodo} />
                )}
              />
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
  } else return <AppLoading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 20,
  },

  list: {
    flex: 1,
  },
});
