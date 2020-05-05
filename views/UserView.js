import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
let { vw, vh, vmin, vmax } = require("react-native-expo-viewport-units");

export default function UserView() {
  const backimg = require("../assets/accountingPhoto.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground source={backimg} style={styles.image}>
        <Text style={styles.textTitle}>Money Manager</Text>
        <TextInput style={styles.TextInput} placeholder="email or username" />
        <TextInput style={styles.TextInput} placeholder="password" />
        <View style={styles.buttonContainer}>
          <Button style={{ width: 1 }} title="Log in" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: vh(100),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textFormat: {
    color: "#fff",
  },
  textTitle: {
    color: "#121212",
    fontSize: 40,
    textAlign: "center",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    margin: 30,
  },
  TextInput: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    height: 50,
    width: 150,
    backgroundColor: "#fff",
    marginHorizontal: 85,
    marginVertical: 20,
  },
  buttonContainer: {
    width: 100,
    justifyContent: "center",
    marginHorizontal:110,
    marginTop:25
  },
});
