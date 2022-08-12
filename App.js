import React from "react";
import Routes from "./src/navigation";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { useFonts, VT323_400Regular } from "@expo-google-fonts/vt323";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
