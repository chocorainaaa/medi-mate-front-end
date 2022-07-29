import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Meditation" onPress={() => navigation.navigate('Meditation')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
