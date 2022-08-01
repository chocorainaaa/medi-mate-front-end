import { StyleSheet, View } from "react-native";
import React from "react";

const UniSlider = ({ title }) => {
  return (
    <View style={styles.parent}>
          <input type="range" min="0" max="20" value="5" class="slider" id="slider"></input>
    </View>
  );
};

export default UniSlider;

const styles = StyleSheet.create({
  parent: {
    width: 250

  },
  Slider: {
    backgroundColor: "blue",
    color: "white",
  }
});