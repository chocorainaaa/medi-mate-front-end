import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";

import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import app from "../../config/firebase";

const auth = app.auth();

const baseURL = "https://medi-mate-app.herokuapp.com";

// Hard coded data object

const extraData = {
  dailyStreak: 2,
  petAge: 13,
  rewardPoints: 20,
};

const Stats = () => {
  const { height, width } = useWindowDimensions();
  const { user } = useContext(AuthenticatedUserContext);
  const [data, setData] = useState({
    visits: null,
    total_meditation_time: null,
    mood_data: {
      average_mood: null,
      all_moodlogs: [
        {
          user_id: null,
          mood_log_id: null,
          date: "2022-08-08T00:00:00.000Z",
          mood_rating: null,
        },
      ],
    },
  });

  // Hardcoded - To be deleted
  const extraData = {
    dailyStreak: 2,
    petAge: 3,
    rewardPoints: 5,
  };

  useEffect(() => {
    fetch(`${baseURL}/stats/${user.uid}`)
      .then((response) => response.json())
      .then((json) => setData(json.payload))
      .catch((error) => console.error(error));
  }, []);

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    pet: require("../../assets/Bird/bird-1.png.png"),
    textBox: require("../../assets/text-boxes/Text-box.png"),
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          resizeMode: "center",
          resizeMethod: "center",
        }}
        source={images.background}
      >


        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>
              Average Mood: {data.mood_data.average_mood}
            </Text>
            <ImageBackground />
          </View>
        </View>


        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>
              Number of visits: {data.visits}
            </Text>
            <ImageBackground />
          </View>
        </View>


        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>
              Total meditation time: {data.total_meditation_time}
            </Text>
            <ImageBackground />
          </View>
        </View>


        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>
              Daily streak: {extraData.dailyStreak}
            </Text>
            <ImageBackground />
          </View>
        </View>


        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>Pet age: {extraData.petAge}</Text>
            <ImageBackground />
          </View>
        </View>


        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>
              Reward points: {extraData.rewardPoints}
            </Text>
            <ImageBackground />
          </View>
        </View>


      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  imageText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    fontFamily: "VT323_400Regular",
    position: "absolute",
  },
  textView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textBox: {
    width: 17,
    height: 17,
    position: "relative",
    justifyContent: "center",
  },
});

export default Stats;
