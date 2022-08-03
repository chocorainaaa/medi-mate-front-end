import {
  View,
  ImageBackground,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

import PetHouseModal from "../Components/PetHouseModal";

const HomeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  function petImageSize() {
    return Math.floor(width / 1.6);
  }

  function petHouseImageSize() {
    return Math.floor(height / 2.8);
  }

  const images = {
    background: require("../../assets/background/placeholder-bkgnd.png"),
    pet: require("../../assets/Bird/druid-owl..png"),
    petHouse: require("../../assets/pet-home/pet-house-placeholder.png"),
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
          top: 0,
          left: 0,
        }}
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
          petHouseStyle={{
            width: petHouseImageSize(),
            height: petHouseImageSize(),
            justifyContent: "center",
          }}
        ></PetHouseModal>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
