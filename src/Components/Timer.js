import { useEffect, useState } from "react";
import { Text } from 'react-native';

function Timer({TimerLength}) {
  const [timer, setTimer] = useState(TimerLength);
  // const breakTime = 6;
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);

  if (timer <= 0) {
    return(<Text id="timer">Timer finished!</Text>)
  }
  return (
    <Text id="timer">
      Timer: {minutes.toString().padStart(1, "0")}:
      {seconds.toString().padStart(2, "0")}
    </Text>
  );
}

export default Timer;