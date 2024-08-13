import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constant/colors";

const GuessRoundItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.guessContainer}>
            <View>
                <Text style={styles.guessRoundItemText}>#{roundNumber}</Text>
            </View>
            <View>
                <Text style={styles.guessRoundItemText}>Opponent's Guess: {guess}</Text>
            </View>
        </View>
    );
};

export default GuessRoundItem;

const styles = StyleSheet.create({
    guessContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.primary700,
        backgroundColor: Colors.accent500,
        padding: 15,
        margin: 5,
        borderRadius: 28
    },
    guessRoundItemText: {
        // fontFamily: "open-sans",
        fontSize: 15,
    }
});
