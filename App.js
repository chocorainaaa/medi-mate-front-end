import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreenHub'
import Meditation from './screens/Meditation';
import MoodLogger from './screens/MoodLogger';
import QuoteGenerator from './screens/QuoteGenerator';
import Stats from './screens/stats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreenHub" component={HomeScreen} />
            <Stack.Screen name="Meditation" component={Meditation} />
            <Stack.Screen name="MoodLogger" component={MoodLogger} />
            <Stack.Screen name="QuoteGenerator" component={QuoteGenerator} />
            <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
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
