import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Colors from "../constant/colors";
import Card from "../components/ui/Card";
import InsructionText from "../components/ui/InsructionText";
import Title from "../components/ui/Title";

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
    <View>
      <Title style={{marginTop: 30}}>Guess Number</Title>
      <Card>
        <InsructionText>Enter A Number</InsructionText>
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
      </Card>
  </View>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  numberInput: {
    borderBottomWidth: 2,
    borderColor: Colors.accent500,
    width: 50,
    height: 50,
    padding: 7,
    color: Colors.accent500,
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
