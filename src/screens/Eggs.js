import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Components/Metrics";

export default function Eggs({ navigation }) {
  // use this for media query type shannanigans
  const { height, width } = useWindowDimensions();

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    egg: require("../../assets/Egg/Egg.png"),
  };

  function handleClick() {
    navigation.navigate("PetName");
  }

  return (
    <ImageBackground
      style={[styles.background, { height: height, width: width }]}
      source={images.background}
    >
      <Text style={styles.text}>Please choose your Medi-Mate</Text>

      <View style={styles.hatchery}>
        <Pressable onPress={handleClick}>
          <Image style={styles.egg} source={images.egg} />
        </Pressable>
        <Pressable onPress={handleClick}>
          <Image style={styles.egg} source={images.egg} />
        </Pressable>
        <Pressable onPress={handleClick}>
          <Image style={styles.egg} source={images.egg} />
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hatchery: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(40),
  },
  egg: {
    height: verticalScale(200),
    width: horizontalScale(100),
    resizeMode: "contain",
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(20),
    fontFamily: "VT323_400Regular",
    alignItems: "center",
    marginTop: 200,
  },
});
