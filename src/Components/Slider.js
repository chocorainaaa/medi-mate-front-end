import { StyleSheet, View } from "react-native";
import React from "react";

const UniSlider = ({ title, min, max }) => {
    return (
        <View style={styles.parent}>
            <input type="range" min={min} max={max} value="5" className="slider" id="slider"></input>
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


const slider = document.getElementById('slider')
slider.value = gameSpeed
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function (e) {
    gameSpeed = e.target.value
    showGameSpeed.innerHTML = gameSpeed;