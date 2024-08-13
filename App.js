import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import PrimaryButtons from "./components/ui/PrimaryButtons";
import StartGameScreens from "./screens/StartGameScreens";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { useState } from "react";
import GameScreens from "./screens/GameScreens";
import GameOverScreens from "./screens/GameOverScreens";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require("./assets/Fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/Fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) =>{setUserNumber(pickedNumber); setGameIsOver(false)}
  const changeGameOverStatus = () =>{setGameIsOver(true);}

  let screen = <StartGameScreens onPickedNumber={pickedNumberHandler}/>

  const startNewGameHandler = () =>{
    setUserNumber(null),
    setRoundsNumber(0);
  }

  if (userNumber) {
    screen = <GameScreens userNumber={userNumber} onGameOver={changeGameOverStatus}/>
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreens roundsNumber={roundsNumber} userNumber={userNumber} onStartGameScreen={startNewGameHandler}/>
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
