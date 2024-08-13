import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constant/colors";

const InsructionText = ({children, style}) => {
    return <Text style={[styles.insructionText, style]}>{children}</Text>;
};

export default InsructionText;

const styles = StyleSheet.create({
    insructionText: {
        color: Colors.accent500,
        fontSize: 24,
        // fontWeight: "bold",
        fontFamily: "open-sans-bold"
    }
});
