import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { ImageBackground } from "react-native-web";

const Stats = () => {
  const { height, width } = useWindowDimensions();

  function petImageSize() {
    return Math.floor(width / 1);
  }

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
          height: "105%",
          position: "absolute",
          resizeMode: "center",
          resizeMethod: "center",
        }}
        source={images.background}
      >
        {/* <View>
          <Image
            resizeMode="contain"
            style={{
              width: petImageSize(),
              height: petImageSize(),
              top: height / 2.3, //778 / 300 = 2.59
              marginLeft: width / 30,
              position: "relative",
            }}
            source={images.pet}
          />
        </View> */}

        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />

            <Text style={styles.imageText}>Mood log</Text>
            <ImageBackground />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />

            <Text style={styles.imageText}>Number of visits:</Text>
            <ImageBackground />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />

            <Text style={styles.imageText}>Total meditation time:</Text>
            <ImageBackground />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />

            <Text style={styles.imageText}>Daily streak:</Text>
            <ImageBackground />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />

            <Text style={styles.imageText}>Pet age:</Text>
            <ImageBackground />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.textView}>
            <ImageBackground
              source={images.textBox}
              style={styles.coverImage}
            />
            <Text style={styles.imageText}>Reward points:</Text>
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
