import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UniModal from "../Components/Modal";
import UniSlider from "../Components/Slider";



// our meditation timer start function
function consolelog() {
  console.log("success")
}

const Meditation = () => {
  return (
    <View>
      <Text>Meditation</Text>
      <UniModal innerText={"Please select times"} >
      <View>
        <UniSlider title={"Breath"}></UniSlider>
      </View>
      
      </UniModal>
    </View>
  );
};

export default Meditation;

const styles = StyleSheet.create({
});
