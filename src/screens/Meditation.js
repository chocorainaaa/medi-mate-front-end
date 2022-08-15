import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
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

  function handleHome() {
    navigation.navigate("Home");
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/beach.gif")}
    >
      <View style={styles.container}>
        <View>
          <ModalMed
            lengthChange={lengthChange}
            breathValue={breathValue}
            breathChange={breathChange}
            setStartMeditation={setStartMeditation}
            lengthValue={lengthValue}
            innerText={"Please select times"}
          ></ModalMed>
          <View style={styles.homeButtonContainer}>
            <Pressable style={styles.homeButton} onPress={handleHome}>
              <Text style={styles.homeButtonText}>Home</Text>
            </Pressable>
          </View>
          <Timer
            style={styles.timer}
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
      </View>
    </ImageBackground>
  );
};

export default Meditation;

// get a bigger image desktop size (then on mobile it will be small)

const styles = StyleSheet.create({
  backgroundImage: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
  },
  bird: {
    height: 200,
    width: 200,
    // position: "absolute",
  },
  birdCage: {
    position: 'absolute',
    top: verticalScale(325),
    paddingTop: verticalScale(25),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(300),
    width: horizontalScale(300),
    marginTop: verticalScale(30),
  },
  homeButton: {
    display: "flex",
    backgroundColor: "#285cc4",
    padding: moderateScale(10),
    borderRadius: 2,
    borderColor: "black",
    borderWidth: 3,
    marginTop: verticalScale(20),
    alignItems: "center",
    width: 110,
  },
  homeButtonContainer: {
    position: "absolute",
    display: "flex",
    top: verticalScale(150),
    left: "6%",
    alignItems: "center",
    borderRadius: 2,
    borderColor: "black",
  },
  homeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "VT323_400Regular",
  },
  timer: {
    position: "relative",
  },
});
