import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";

import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import app from "../../config/firebase";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Components/Metrics";

const auth = app.auth();

const baseURL = "https://medi-mate-app.herokuapp.com";

// Hard coded data object

const extraData = {
  dailyStreak: 2,
  petAge: 13,
  rewardPoints: 20,
};

const Stats = ({ navigation }) => {
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
  // console.log(data.mood_data.average_mood)
  // console.log(data.mood_data.average_mood)

  function petImageSize() {
    return Math.floor(width / 1);
  }
  function handleHome() {
    navigation.navigate("Home");
  }

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    textBox: require("../../assets/text-boxes/Text-box.png"),
  };

  return (

    <ImageBackground
      style={[styles.background, { height: height, width: width }]}
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

      <View>
        <Pressable style={styles.homeButton} onPress={handleHome}>
          <Text style={styles.homeButtonText}>Home</Text>
        </Pressable>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  background: {
    position: "absolute",
    resizeMode: "cover",
    resizeMethod: "center",
  },
  container: {
    flex: 1,
  },
  coverImage: {
    width: horizontalScale(300),
    height: verticalScale(50),
    resizeMode: "cover",
  },
  homeButton: {
    backgroundColor: "#0782F9",
    padding: moderateScale(10),
    borderRadius: 10,
    marginTop: verticalScale(20),
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 70,
    width: 110,
  },
  homeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "VT323_400Regular",
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
