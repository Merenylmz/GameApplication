import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constant/colors";

const PrimaryButtons = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButtons;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 0 },
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  pressed: {
    opacity: 0.75,
  },
});
