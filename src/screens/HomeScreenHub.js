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


  // why divided by one? 

  function petImageSize() {
    return Math.floor(width / 1);
  }

  function petHouseImageSize() {
    return Math.floor(height / 5.5);
  }

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
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
        <PetHouseModal
          image={images.petHouse}
          navigation={navigation}
          petHouseStyle={{
            width: petHouseImageSize(),
            height: petHouseImageSize(),
            bottom: height / 2.2,
            marginRight: width / 1.7,
            position: "relative",
          }}
        ></PetHouseModal>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
