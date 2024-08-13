import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constant/colors";
import PrimaryButton from "../components/ui/PrimaryButtons";

const GameOverScreens = ({roundsNumber, userNumber, onStartGameScreen}) => {
    return (
        <View style={styles.rootContainer}>
            <Title style={{marginBottom: 30}}>GAME OVER!</Title>
            <View style={{marginBottom: 30}}>
                <Image 
                    source={require("../assets/Images/success.png")}
                    style={styles.imageContainer}
                />
            </View>
            <Text style={styles.summaryText}>
                Your Phone needed 
                <Text style={styles.highLight}> {roundsNumber} </Text> 
                rounds to guess the number 
                <Text style={styles.highLight}> {userNumber} </Text> 
            </Text>
            <PrimaryButton onPress={onStartGameScreen}>Start A New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreens;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding:24,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "black"
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 24
    },
    highLight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary700
    }
});
