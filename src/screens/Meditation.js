import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ModalMed from "../Components/ModalMeditation";
import Timer from "../Components/Timer";
import beach from "../../assets/beach.jpg"

// our meditation timer start function
function consolelog() {
  console.log("success");
}

const Meditation = () => {
  const [TimerLength, setTimerLength] = useState(300);
  const TimerLengthChange = (sliderValue) => {
    // const value = e.target.value;
    setTimerLength(sliderValue);
  };
  return (
    <View>
      <Text>Meditation</Text>
      {/* <Image styles={{backgroundImage: `url(${beach})`}}/> */}
      <ModalMed changeState={TimerLengthChange} innerText={"Please select times"}></ModalMed>
      <Timer TimerLength={TimerLength}/>
    </View>
  );
};

export default Meditation;

const styles = StyleSheet.create({
});
