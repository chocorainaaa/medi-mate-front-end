import { StyleSheet, View, Text } from "react-native";
import React from "react";

const UniSlider = ({ min, max, id, handleChange, sliderValue, label }) => {

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
      <Text>{label}</Text>
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

