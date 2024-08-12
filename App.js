import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import PrimaryButtons from "./components/ui/PrimaryButtons";
import StartGameScreens from "./screens/StartGameScreens";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { useState } from "react";
import GameScreens from "./screens/GameScreens";
import GameOverScreens from "./screens/GameOverScreens";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) =>{setUserNumber(pickedNumber); setGameIsOver(false)}
  const changeGameOverStatus = () =>{setGameIsOver(true);}

  let screen = <StartGameScreens onPickedNumber={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreens userNumber={userNumber} onGameOver={changeGameOverStatus}/>
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreens />
  }
  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
