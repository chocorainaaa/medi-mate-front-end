import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import ModalMed from "../Components/ModalMeditation";

const Meditation = () => {

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/beach.jpg")}
    >
      <View>
        <Text>Meditation</Text>
        <ModalMed
          innerText={"Please select times"}
        ></ModalMed>
      </View>
      <Image
        style={styles.bird}
        source={require("../../assets/Bird/bird.gif")}
      />
    </ImageBackground>
  );
};

export default Meditation;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  bird: {
    width: 200,
    height: 200,
  },
});
