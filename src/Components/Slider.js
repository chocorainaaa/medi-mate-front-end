import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

const UniSlider = ({ min, max, id, onChange, lengthChange, breathChange, holdChange, sliderValue, label }) => {

  // useEffect((sliderValue) => {
  //   setTimer(sliderValue)
  // }, [sliderValue]);



  return (
    <View style={styles.parent}>
      <TextInput
        style={styles.slider}
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        className="slider"
        id={id}
        onChange={onChange}
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
  slider: {
    backgroundColor: "blue",
    color: "white",
  },
});

