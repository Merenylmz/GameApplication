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
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        width: "100%"
    },
    guessRoundItemText: {
        // fontFamily: "open-sans",
        fontSize: 15,
    }
});
