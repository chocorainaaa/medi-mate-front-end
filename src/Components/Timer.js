import { useEffect, useState } from "react";
import { StyleSheet, Text } from 'react-native';


function Timer({ lengthValue, startMeditation }) {

  const [timer, setTimer] = useState(lengthValue)


  useEffect(() => {
    setTimer(lengthValue)
  }, [lengthValue])


  // const breakTime = 6;
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  useEffect(() => {
    setTimeout(() => {
      setTimer(lengthValue - 1);
    }, 1000);
    console.log(timer)
  }, [startMeditation]);



  if (timer <= 0) {
    return (<Text id="timer">Timer finished!</Text>)
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
