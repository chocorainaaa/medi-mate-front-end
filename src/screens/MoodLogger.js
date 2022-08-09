import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";

import {
  horizontalScale,
  verticalScale,
  moderateScale
} from "../Components/Metrics"

export default function MoodLogger({ navigation }) {
  // use this for media query type shannanigans
  const { height, width } = useWindowDimensions();

  function handleSuperHappy() {
    console.log("Super Happy");
    navigation.navigate("Meditation");
  }

  function handleHappy() {
    console.log("Happy");
    navigation.navigate("Meditation");
  }

  function handleOK() {
    console.log("OK");
    navigation.navigate("Meditation");
  }

  function handleSad() {
    console.log("Sad");
    navigation.navigate("Meditation");
  }

  function handleSuperSad() {
    console.log("Super Sad");
    navigation.navigate("Meditation");
  }

  return (
    <View style={styles.container}>
      <View style={styles.moods}>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleSuperHappy}
        >
          <Image
            style={styles.mood}
            source={require("../../assets/MoodFaces/superhappy.png")}
          />
          <Text>Super Happy</Text>
        </Pressable>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleHappy}
        >
          <Image
            style={styles.mood}
            source={require("../../assets/MoodFaces/happy.png")}
          />
          <Text>Happy</Text>
        </Pressable>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleOK}
        >
          <Image
            style={styles.mood}
            source={require("../../assets/MoodFaces/OK.png")}
          />
          <Text>OK</Text>
        </Pressable>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleSad}
        >
          <Image
            style={styles.mood}
            source={require("../../assets/MoodFaces/sad.png")}
          />
          <Text>Sad</Text>
        </Pressable>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleSuperSad}
        >
          <Image
            style={styles.mood}
            source={require("../../assets/MoodFaces/supersad.png")}
          />
          <Text>Super Sad</Text>
        </Pressable>
      </View>
      <Text>How are you feeling today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderwidth: 20,
    resizeMode: "contain",
  },
  moods: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  },
  mood: {
    height: 200,
    width: 100,
    resizeMode: "contain",
  },
  // egg2: {
  //     backgroundImage: url("../../assets/Egg/Egg.png")
  // },
  // egg2: {
  //     backgroundImage: url("../../assets/Egg/Egg.png")
  // },
});
