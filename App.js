import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import UserView from "./views/UserView"

export default function App() {
  const [displayedText, setDisplayedText] = useState("Initial value");

  return (
    <View style={styles.container}>
      <UserView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
