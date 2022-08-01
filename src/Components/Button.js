import { StyleSheet, Button, View } from "react-native";
import React from "react";

const UniButton = ({onpress, title}) => {
  return (
    <View>
      <Button style={styles.Button} onpress={onpress}>{title}</Button>
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