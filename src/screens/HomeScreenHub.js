import {
  View,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

import PetHouseModal from "../Components/PetHouseModal";
import { horizontalScale, verticalScale, moderateScale } from "../Components/Metrics"

const HomeScreen = ({ navigation }) => {


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
      {/* The width and height for the background are nuts! this seems to be the right config of width as vw and height as %vw. needs testing on other peoples machines */}
      <ImageBackground
        style={{
          width: "100vw",
          height: "100%vh",
          position: "absolute",
          resizeMode: "center",
          resizeMethod: "center",
        }}
        source={images.background}
      >
        {/* The clickable area for the modal is way to big! I moved the modal above the pet image to here and it solved a lot of the image problems */}
        <PetHouseModal
          image={images.petHouse}
          navigation={navigation}
          petHouseStyle={{
            width: horizontalScale(100),
            height: verticalScale(200),
            bottom: verticalScale(40),
            marginRight: horizontalScale(300),
            position: "relative",
            resizeMode: "contain"
          }}
        ></PetHouseModal>
        <Image
          resizeMode="contain"
          style={{
            width: horizontalScale(200),
            height: verticalScale(400),
            marginTop: moderateScale(100),
            marginLeft: moderateScale(100),
            position: "relative",
          }}
          source={images.pet}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
