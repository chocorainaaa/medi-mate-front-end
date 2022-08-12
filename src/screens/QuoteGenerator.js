import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Components/Metrics";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const api_url = "https://zenquotes.io/api/quotes/";

  async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    let quote = data[0].q;
    let author = data[0].a;
    setQuote(quote);
    setAuthor(author);
  }
  useEffect(() => {
    getapi(api_url);
  }, []);

  /* fetch(`${baseURL}/mood-log`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    
  },
  body: JSON.stringify({
    firebase_user_id: `${user.uid}`,
    mood_rating: `${mood}`,
  }), */

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
              {quote} - {author}
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
    height: verticalScale(180),
    resizeMode: "contain",
  },
  imageText: {
    fontSize: 18,
    width: horizontalScale(300),

    color: "black",
    fontWeight: "bold",
    position: "absolute",
    fontFamily: "VT323_400Regular",
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
    width: horizontalScale(19),
    height: verticalScale(80),
    position: "relative",
    justifyContent: "center",
  },
});

export default QuoteGenerator;
