import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import InsructionText from "../components/ui/InsructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreens = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(()=>{
    if (currentGuess === userNumber) {
      return onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if ((direction === "lower" && userNumber > currentGuess) || (direction === "greater" && userNumber < currentGuess)) {
      return Alert.alert("Hey dude, dont tell lie", "Please click buttons correctly")
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const guess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(guess);
    // guess == userNumber && Alert.alert("Congratulations", "Hey Dude, Your number may be this count; \n"+guess);
  };

  return (
    <View style={styles.screen}>
      <Title>Oppenent guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InsructionText>Higher or Lower</InsructionText>
        <View style={{flexDirection: "row", marginTop: 15}}>
          <View>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButtons>
          </View>
          <View>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButtons>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreens;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20
  }
});
