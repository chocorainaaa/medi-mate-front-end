import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";

const UniSlider = ({ changeState, min, max, id }) => {
    const [sliderValue, setSliderValue] = useState(1);
    function handleChange(e) {
        console.log(e.target.value)
        setSliderValue(e.target.value)
    }

    useEffect((sliderValue) => {
       changeState(sliderValue)
      }, [sliderValue]);

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

// this is slider functionality taken from another repo, needs to be looked at understood and then reconfigured

// const showGameSpeed = document.getElementById('showGameSpeed');
// showGameSpeed.innerHTML = gameSpeed;
