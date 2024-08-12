import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButtons from "./components/PrimaryButtons";
import StartGameScreens from "./screens/StartGameScreens";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { useState } from "react";
import GameScreens from "./screens/GameScreens";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) =>{setUserNumber(pickedNumber);}

  let screen = <StartGameScreens onPickedNumber={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreens/>
  }
  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
