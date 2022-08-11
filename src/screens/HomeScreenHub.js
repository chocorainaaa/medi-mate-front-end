import React from "react";
import {
  View,
  ImageBackground,
  Image,
  useWindowDimensions
} from "react-native";

import PetHouseModal from "../Components/PetHouseModal";

import {
  horizontalScale,
  verticalScale,
  moderateScale
} from "../Components/Metrics"
const HomeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    pet: require("../../assets/Bird/druid-owl.png"),
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
          width: width,
          height: height,
          position: "absolute",
          resizeMode: "center",
          resizeMethod: "center",
        }}
        source={images.background}
      >

        <PetHouseModal
          image={images.petHouse}
          navigation={navigation}
          petHouseStyle={{
            width: horizontalScale(100),
            height: verticalScale(200),
            bottom: verticalScale(40),
            marginRight: horizontalScale(150),
            position: "relative",
            resizeMode: "contain"
          }}
        ></PetHouseModal>
        <Image
          resizeMode="contain"
          style={{
            width: horizontalScale(200),
            height: verticalScale(400),
            marginTop: verticalScale(100),
            marginLeft: horizontalScale(100),
            position: "relative",
          }}
          source={images.pet}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
