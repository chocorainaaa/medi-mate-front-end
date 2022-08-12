import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useState, useEffect } from "react";
import ModalMed from "../Components/ModalMeditation";
import Timer from "../Components/Timer";
import AnimatedRing from "../Components/Ring";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Components/Metrics";
const Meditation = ({ navigation }) => {
  const [startMeditation, setStartMeditation] = useState(false);
  const [lengthValue, setLengthValue] = useState(5);
  const [breathValue, setBreathValue] = useState(5);
  const [timer, setTimer] = useState(0);

  function lengthChange(sliderValue) {
    setLengthValue(sliderValue);
  }
  function breathChange(sliderValue) {
    setBreathValue(sliderValue);
  }


  useEffect(() => {
    if (startMeditation && timer <= 0) {
      navigation.navigate("Home");
    }
  }, [timer]);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/beach.gif")}
    >
      <View>
        <ModalMed
          lengthChange={lengthChange}
          breathValue={breathValue}
          breathChange={breathChange}
          setStartMeditation={setStartMeditation}
          lengthValue={lengthValue}
          innerText={"Please select times"}
        ></ModalMed>
        <Timer
          timer={timer}
          setTimer={setTimer}
          lengthValue={lengthValue}
          startMeditation={startMeditation}
        />
      </View>

      <View style={styles.birdCage}>
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/druid-owl.png")}
        />
        <AnimatedRing
          style={styles.ring}
          start={startMeditation}
          breathValue={breathValue}
        />
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
    height: verticalScale(500),
    width: horizontalScale(400),
    marginRight: horizontalScale(200),
    marginTop: verticalScale(25),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
