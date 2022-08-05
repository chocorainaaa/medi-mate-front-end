import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import ModalMed from "../Components/ModalMeditation";
import Timer from "../Components/Timer";
import AnimatedRing from "../Components/Ring";


const Meditation = () => {
  const [startMeditation, setStartMeditation] = useState(false);
  const [lengthValue, setLengthValue] = useState(5);
  const [breathValue, setBreathValue] = useState(5);
  const [holdValue, setHoldValue] = useState(5);
  const [sliderValue, setSliderValue] = useState(15);

  function lengthChange(sliderValue) {
    setLengthValue(sliderValue);
  }
  function breathChange(sliderValue) {
    setBreathValue(sliderValue);
  }
  function holdChange(sliderValue) {
    setHoldValue(sliderValue);
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/beach.gif")}
    >
      <View>
        <Text>Meditation</Text>
        <ModalMed
          lengthChange={lengthChange}
          breathValue={breathValue}
          holdValue={holdValue}
          breathChange={breathChange}
          holdChange={holdChange}
          setStartMeditation={setStartMeditation}
          lengthValue={lengthValue}
          innerText={"Please select times"}
        ></ModalMed>
        <Timer lengthValue={lengthValue} startMeditation={startMeditation} />
      </View>

      <View style={styles.birdCage}>
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/bird.gif")}
        />
        <AnimatedRing style={styles.ring} start={startMeditation} breathValue={breathValue} />
      </View>
    </ImageBackground>
  );
};

export default Meditation;

// get a bigger image desktop size (then on mobile it will be small)

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  bird: {
    height: 200,
    width: 200,
  },
  birdCage: {
    paddingTop: 600,
    paddingLeft: 150
  }
});
