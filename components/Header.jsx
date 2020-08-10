import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My tasks:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe66d",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 30,
    color: "#14213d",
  },
});

export default Header;
