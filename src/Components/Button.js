import { StyleSheet, Button, View } from "react-native";
import React from "react";

const UniButton = ({onPress, title}) => {
  return (
    <View>
      <Button style={styles.Button} title={title} onPress={onPress}></Button>
    </View>
  );
};

export default UniButton;

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "blue",
        color: "white"
    }
});