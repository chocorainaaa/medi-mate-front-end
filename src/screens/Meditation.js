import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UniButton from "../Components/Button";
import UniModal from "../Components/Modal";



// our meditation timer start function
function consolelog() {
  console.log("success")
}

const Meditation = () => {
  return (
    <View>
      <Text>Meditation</Text>
      <UniButton title={"Start"} onPress={consolelog}></UniButton>
      <UniModal></UniModal>
    </View >
  );
};

export default Meditation;

const styles = StyleSheet.create({
});
