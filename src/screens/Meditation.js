import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useState, useEffect } from "react";
import ModalMed from "../Components/ModalMeditation";
import Timer from "../Components/Timer";
import AnimatedRing from "../Components/Ring";


const Meditation = ({navigation}) => {
  const [startMeditation, setStartMeditation] = useState(false);
  const [lengthValue, setLengthValue] = useState(5);
  const [breathValue, setBreathValue] = useState(5);
  const [holdValue, setHoldValue] = useState(5);
  const [sliderValue, setSliderValue] = useState(15);
  const [timer, setTimer] = useState(0)

  function lengthChange(sliderValue) {
    setLengthValue(sliderValue);
  }
  function breathChange(sliderValue) {
    setBreathValue(sliderValue);
  }
  function holdChange(sliderValue) {
    setHoldValue(sliderValue);
  }

  useEffect(() => {
    if (startMeditation && timer <= 0) {
      navigation.navigate("Home")
    }
  }, [timer])

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
        <Timer timer={timer} setTimer={setTimer} lengthValue={lengthValue} startMeditation={startMeditation} />
      </View>

      <View style={styles.birdCage}>
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/druid-owl..png")}
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
    position: "absolute",
  },
  birdCage: {
    paddingTop: 500,
    paddingLeft: 150,
    flex: "display",
    justifyContent: "center",
    alignItems: "center",
  }
});
