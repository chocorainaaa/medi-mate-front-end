import { useEffect, useState } from "react";
import { StyleSheet, Text } from 'react-native';


function Timer({ lengthValue, startMeditation }) {

  const [timer, setTimer] = useState(0)


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
      console.log("before", timer)
      setTimer(innerValue)
      console.log("after", timer)
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
  },
});
