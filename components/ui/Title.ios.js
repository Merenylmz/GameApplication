import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({children, style}) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
    width: 300
  }
});
