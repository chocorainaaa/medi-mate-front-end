import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Meditation" onPress={() => navigation.navigate('Meditation')} />
      <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
      <Button title="Go to Mood Logger" onPress={() => navigation.navigate('MoodLogger')} />
      <Button title="Go to Quote" onPress={() => navigation.navigate('QuoteGenerator')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
