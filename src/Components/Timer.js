import { useEffect, useState } from "react";
import { StyleSheet, Text } from 'react-native';
import { moderateScale } from "./Metrics";


function Timer({ lengthValue, startMeditation, timer, setTimer }) {


  useEffect(() => {
    if (startMeditation) {
      setTimer(lengthValue)
    }
  }, [startMeditation])


  // const breakTime = 6;
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  useEffect(() => {
    const innerValue = timer - 1;
    if (innerValue < 0) {
      return;
    }
    setTimeout(() => {
      setTimer(innerValue)
    }, 1000);
  }, [timer]);


  if (timer < 0 && startMeditation) {
    return (<Text id="timer">Timer finished!!</Text>)
  }
  return (
    <Text style={styles.Timer} id="timer">
      Timer: {minutes.toString().padStart(1, "0")}:
      {seconds.toString().padStart(2, "0")}
    </Text>
  );
}

export default Timer;


const styles = StyleSheet.create({
  Timer: {
    paddingBottom: 15,
    fontFamily: "VT323_400Regular",
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(25)
  },
});
