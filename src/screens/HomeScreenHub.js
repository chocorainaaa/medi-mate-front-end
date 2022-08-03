import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  Pressable,
  TouchableHighlight,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useContext } from "react";

import ModalComponent from "../Components/modal";

const HomeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  function imageWidth() {
    return Math.floor(width / 1.6);
  }

  function imageHeight() {
    return Math.floor(height / 2.8);
  }

  async function handleSignout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  const images = {
    background: require("../../assets/background/placeholder-bkgnd.png"),
    pet: require("../../assets/Bird/druid-owl..png"),
    petHouse: require("../../assets/pet-home/pet-house-placeholder.png"),
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.background}
      >
        <Image
          resizeMode="contain"
          style={{
            borderWidth: 10,
            borderColor: "black",
            width: imageWidth(),
            height: imageWidth(),
            top: height / 2.39, //778 / 300 = 2.59
            position: "relative",
          }}
          source={images.pet}
        />
        <ModalComponent
          image={images.petHouse}
          navigation={navigation}
          petHouseStyle={styles.petHouse}
        ></ModalComponent>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  petHouse: {
    width: 200,
    height: 200,
    justifyContent: "center",
  },

  petImage: {
    width: 200,
    height: 200,
    zIndex: 0,
  },
  petPosition: {
    position: "relative",
    top: "60%",
    left: "30%",
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    // flex: 1,
    // width: null,
    // height: null,
    // resizeMode: "cover",

    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
