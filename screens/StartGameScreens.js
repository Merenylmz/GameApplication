import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButtons from "../components/PrimaryButtons";

const StartGameScreens = ({onPickedNumber}) => {
  const [enteredText, setEnteredText] = useState("");
  const handleConfirmSubmit = () =>{
    const number = parseInt(enteredText);
    if (number < 2 || number > 98 || isNaN(number)) {
      return Alert.alert("Warning", "Number has a to be between 1 and 99", [{
        text: "Okay",
        style: "destructive",
      }]);
    }
    onPickedNumber(number);
    setEnteredText("");
  }
  const resetButton = () =>{setEnteredText("");}
  return (
    <View style={styles.inputsContainer}>
      <View style={{ marginHorizontal: "auto" }}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          inputMode="numeric"
          keyboardType="number-pad"
          autoComplete="none"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(e)=>setEnteredText(e)}          
          value={enteredText}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={resetButton}>Reset</PrimaryButtons>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={handleConfirmSubmit}>Confirm</PrimaryButtons>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  inputsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    elevation: 8, //ANDROID
    shadowColor: "black", // IOS
    shadowOffset: { width: 2, height: 10 }, //IOS
    shadowOpacity: 0.25, //IOS
    borderRadius: 10,
  },
  numberInput: {
    borderBottomWidth: 2,
    borderColor: "#ddb52f",
    width: 50,
    height: 50,
    padding: 7,
    color: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  }
});
