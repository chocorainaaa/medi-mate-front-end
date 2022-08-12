import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";

export default function Eggs({ navigation }) {
  const { height, width } = useWindowDimensions();

  function handleClick() {
    navigation.navigate("Home", { screen: "Home" });
  }

  return (
    <View style={styles.container}>
      <View style={styles.hatchery}>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleClick}
        >
          <Image
            style={styles.egg}
            source={require("../../assets/Egg/Egg.png")}
          />
        </Pressable>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleClick}
        >
          <Image
            style={styles.egg}
            source={require("../../assets/Egg/Egg.png")}
          />
        </Pressable>
        <Pressable
          style={{
            height: 200,
            width: 100,
          }}
          onPress={handleClick}
        >
          <Image
            style={styles.egg}
            source={require("../../assets/Egg/Egg.png")}
          />
        </Pressable>
      </View>
      <Text>Please choose your Medi-Mate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderwidth: 20,
  },
  hatchery: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
  },
  egg: {
    height: 200,
    width: 100,
    resizeMode: "contain",
  },
  // egg2: {
  //     backgroundImage: url("../../assets/Egg/Egg.png")
  // },
  // egg2: {
  //     backgroundImage: url("../../assets/Egg/Egg.png")
  // },
});
