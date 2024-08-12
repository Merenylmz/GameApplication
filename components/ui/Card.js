import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constant/colors";

const Card = ({children}) => {
    return (
        <View style={styles.inputsContainer}>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    inputsContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        elevation: 8, //ANDROID
        shadowColor: "black", // IOS
        shadowOffset: { width: 2, height: 10 }, //IOS
        shadowOpacity: 0.25, //IOS
        borderRadius: 10,
    },
});
