import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import app from "../../config/firebase";

const auth = app.auth();

const baseURL = "https://medi-mate-app.herokuapp.com";

import {
  horizontalScale,
  verticalScale,
  moderateScale
} from "../Components/Metrics";

export default function MoodLogger({ navigation }) {
  // use this for media query type shannanigans
  const { height, width } = useWindowDimensions();
  // mood is a number between 1 - 5
  const { user } = useContext(AuthenticatedUserContext);

  async function postMood(mood) {

    await fetch(`${baseURL}/mood-log`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firebase_user_id: `${user.uid}`,
        mood_rating: `${mood}`,
      }),
      success: 200,
    })
  }

  async function handleSuperHappy() {
    await postMood(5);
    navigation.navigate("Meditation");
  }

  async function handleHappy() {
    await postMood(4);
    navigation.navigate("Meditation");
  }

  async function handleOK() {
    await postMood(3);
    navigation.navigate("Meditation");
  }

  async function handleSad() {
    await postMood(2);
    navigation.navigate("Meditation");
  }

  async function handleSuperSad() {
    await postMood(1);
    navigation.navigate("Meditation");
  }

  function handleHome() {
    navigation.navigate("Home");
  }

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    superHappy: require("../../assets/moodBirds/happy-bird.png"),
    happy: require("../../assets/moodBirds/semi-happy-bird.png"),
    OK: require("../../assets/moodBirds/meh-bird.png"),
    sad: require("../../assets/moodBirds/semi-sad-bird.png"),
    superSad: require("../../assets/moodBirds/sad-bird.png"),
  };

  return (
    <ImageBackground
      style={[styles.background, { height: height, width: width }]}
      source={images.background}
    >
      <View style={[{ width: width, height: height }, styles.container]}>
        <Text style={styles.moodText}>How are you feeling today?</Text>

        <Pressable onPress={handleSuperHappy}>
          <Image style={styles.moodImage} source={images.superHappy} />
          <Text style={styles.moodText}>Super Happy</Text>
        </Pressable>

        <Pressable onPress={handleHappy}>
          <Image style={styles.moodImage} source={images.happy} />
          <Text style={styles.moodText}>Happy</Text>
        </Pressable>

        <Pressable onPress={handleOK}>
          <Image style={styles.moodImage} source={images.OK} />
          <Text style={styles.moodText}>OK</Text>
        </Pressable>

        <Pressable onPress={handleSad}>
          <Image style={styles.moodImage} source={images.sad} />
          <Text style={styles.moodText}>Sad</Text>
        </Pressable>

        <Pressable onPress={handleSuperSad}>
          <Image style={styles.moodImage} source={images.superSad} />
          <Text style={styles.moodText}>Super Sad</Text>
        </Pressable>
      </View>

      <View>
        <Pressable style={styles.homeButton} onPress={handleHome}>
          <Text style={styles.homeButtonText}>Home</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    alignItems: "center",
    zIndex: -1,
  },
  container: {
    backgroundColor: "white",
    justifyContent: "space-around",
    borderColor: "black",
    borderwidth: 5,
    flexDirection: "column",
    height: verticalScale(600),
    width: horizontalScale(220),
    marginTop: verticalScale(30),
  },
  homeButton: {
    display: "flex",
    backgroundColor: "#0782F9",
    padding: moderateScale(10),
    borderRadius: 10,
    marginTop: verticalScale(20),
    alignItems: "center",
    width: 110,
  },
  homeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "VT323_400Regular",
  },
  moodImage: {
    height: 60,
    width: 50,
    alignSelf: "center",
  },
  moodText: {
    color: "black",
    fontWeight: "bold",
    fontSize: moderateScale(20),
    fontFamily: "VT323_400Regular",
    alignSelf: "center",
  },
});
