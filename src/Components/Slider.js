import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import Slider from '@react-native-community/slider'


const UniSlider = ({ min, max, id, onChange, label, sliderValue }) => {

  return (
    <View style={styles.parent}>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        value={sliderValue}
        step={1}
        id={id}
        onValueChange={
          (sliderValue) => onChange(sliderValue)
        }
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
    color: "white",
  },
});

