import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreenHub";
import Meditation from "../screens/Meditation";
import MoodLogger from "../screens/MoodLogger";
import QuoteGenerator from "../screens/QuoteGenerator";

import Stats from "../screens/stats";
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    // Once all navigation functionality added into each page, we can screenOptions={{ headerShown: false }} after <Stack.Navigator>

    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Meditation" component={Meditation} />
      <Stack.Screen name="MoodLogger" component={MoodLogger} />
      <Stack.Screen name="QuoteGenerator" component={QuoteGenerator} />
      <Stack.Screen name="Stats" component={Stats} />
    </Stack.Navigator>
  );
}
