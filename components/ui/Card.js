import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constant/colors";

const deviceWidth = Dimensions.get("window").width;

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
        marginHorizontal: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 12 : 24,
        backgroundColor: Colors.primary700,
        elevation: 8, //ANDROID
        shadowColor: "black", // IOS
        shadowOffset: { width: 2, height: 10 }, //IOS
        shadowOpacity: 0.25, //IOS
        borderRadius: 10,
    },
});
