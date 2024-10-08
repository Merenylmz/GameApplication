import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import InsructionText from "../components/ui/InsructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessRoundItem from "../components/game/GuessRoundItem";

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

const GameScreens = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      return onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && userNumber > currentGuess) ||
      (direction === "greater" && userNumber < currentGuess)
    ) {
      return Alert.alert(
        "Hey dude, dont tell lie",
        "Please click buttons correctly"
      );
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const guess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(guess);
    setGuessRounds((prevGuessRound) => [guess, ...prevGuessRound]);
    // guess == userNumber && Alert.alert("Congratulations", "Hey Dude, Your number may be this count; \n"+guess);
  };
  const { width, height } = useWindowDimensions();

  let content = (
    <>
      <Title>Oppenent guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InsructionText style={{ marginBottom: 20 }}>
          Higher or Lower
        </InsructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButtons>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButtons>
          </View>
        </View>
      </Card>
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessRoundItem
              guess={item}
              roundNumber={index + Math.log10(10)}
            ></GuessRoundItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );

  if (width > 500) {
    content = <>
      <Title>Oppenent guess</Title>
      <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color={"white"} />
          </PrimaryButtons>
        </View>
        
        <NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add" size={24} color={"white"} />
          </PrimaryButtons>
        </View>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessRoundItem
              guess={item}
              roundNumber={index + Math.log10(10)}
            ></GuessRoundItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  }

  return <View style={styles.screen}>
    {content}
  </View>;
};

export default GameScreens;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },  
  buttonContainer: {
    flex: 1,
  },
});
