import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import ModalMed from "../Components/ModalMeditation";
import Timer from "../Components/Timer"

const Meditation = () => {
  const [startMeditation, setStartMeditation] = useState(false);
  const [lengthValue, setLengthValue] = useState(5);
  const [breathValue, setBreathValue] = useState(5);
  const [holdValue, setHoldValue] = useState(5);

  function lengthChange(e) {
    console.log(e.target.value)
    setLengthValue(e.target.value)
  }
  function breathChange(e) {
    console.log(e.target.value)
    setBreathValue(e.target.value)
  }
  function holdChange(e) {
    console.log(e.target.value)
    setHoldValue(e.target.value)
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/beach.jpg")}
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
      <View style={styles.birdcage}>
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/bird.gif")}
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
    height: 100,
    width: 100,
    paddingLeft: 50
  },
});
