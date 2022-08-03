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

import PetHouseModal from "../Components/PetHouseModal";

const HomeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  function petImageSize() {
    return Math.floor(width / 1.6);
  }

  function petHouseImageSize() {
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

  const styles = StyleSheet.create({
    petHouse: {
      width: petHouseImageSize(),
      height: petHouseImageSize(),
      justifyContent: "center",
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
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  });

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
            width: petImageSize(),
            height: petImageSize(),
            top: height / 2.39, //778 / 300 = 2.59
            position: "relative",
          }}
          source={images.pet}
        />
        <PetHouseModal
          image={images.petHouse}
          navigation={navigation}
          petHouseStyle={styles.petHouse}
        ></PetHouseModal>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
