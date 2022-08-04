import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";

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

    // <View>
    //   <Text>{quote}</Text>
    //   <Text>{author}</Text>
    // </View>
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
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
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
    width: 19,
    height: 19,
    position: "relative",
    justifyContent: "center",
  },
});

export default QuoteGenerator;
