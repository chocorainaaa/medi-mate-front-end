import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import app from "../../config/firebase";

const auth = app.auth();

const baseURL = "https://medi-mate-app.herokuapp.com";

export default function MoodLogger({ navigation }) {
  // use this for media query type shannanigans
  const { height, width } = useWindowDimensions();

  // mood is a number between 1 - 5
  const [ mood, setMood ] = useState(null);
  const { user } = useContext(AuthenticatedUserContext);

useEffect(
  fetch(`${baseURL}/mood-log`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firebase_user_id: `${user.uid}`,
    mood_rating: `${mood}` ,
  })
}), [mood]);

  function handleSuperHappy() {
    setMood(5);
    navigation.navigate("Meditation");
  }

  function handleHappy() {
    setMood(4);
    navigation.navigate("Meditation");
  }

  function handleOK() {
    setMood(3);
    navigation.navigate("Meditation");
  }

  function handleSad() {
    setMood(2);
    navigation.navigate("Meditation");
  }

  function handleSuperSad() {
    setMood(1);
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
    width: 500,
    height: 800,
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
