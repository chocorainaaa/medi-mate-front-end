import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";

const MoodLogger = () => {
  const { height, width } = useWindowDimensions();

  function petImageSize() {
    return Math.floor(width / 1);
  }

  function petHouseImageSize() {
    return Math.floor(height / 5.5);
  }

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    pet: require("../../assets/Bird/bird-1.png.png"),
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
      </ImageBackground>
    </View>
  );
};

export default MoodLogger;

const styles = StyleSheet.create({});
