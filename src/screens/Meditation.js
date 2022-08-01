import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalMed from "../Components/ModalMeditation";



// our meditation timer start function
function consolelog() {
  console.log("success")
}

const Meditation = () => {
  return (
    <View>
      <Text>Meditation</Text>
      <ModalMed innerText={"Please select times"}>
      </ModalMed>
    </View>
  );
};

export default Meditation;

const styles = StyleSheet.create({
});
