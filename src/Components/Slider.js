import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const UniSlider = ({ min, max, id, meditationTrigger }) => {

  const [sliderValue, setSliderValue] = useState(5);

  function handleChange(e) {
    setSliderValue(e.target.value)
  }

  // useEffect((sliderValue) => {
  //   setTimer(sliderValue)
  // }, [sliderValue]);


  return (
    <View style={styles.parent}>
      <input
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        className="slider"
        id={id}
        onChange={(e) => handleChange(e)}
      />
      <Timer sliderValue={sliderValue} startMeditation={meditationTrigger} />
    </View>
  );
};

export default UniSlider;

const styles = StyleSheet.create({
  parent: {
    width: 250,
  },
  Slider: {
    backgroundColor: "blue",
    color: "white",
  },
});

