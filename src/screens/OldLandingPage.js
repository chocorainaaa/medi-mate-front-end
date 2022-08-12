import { Link } from "@react-navigation/native";
import React from "react";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
// import GenericButton from "../Components/GenericButton";
import { auth } from "../firebase";

const LandingPage = () => {
  function handleClick() {
    console.log("Login clicked");
    return;
  }

  return (
    <View>
      <View>
        {/* <GenericButton 
        title="Login"
        onPress={() => {handleClick()}}
        accessibilityLabel="Login"
        text="Login"
      /> */}
        <Image
          style={styles.ImageSmall}
          source={require("../assets/EggHatch.png")}
        />
        <View>
          <Button
            title="Login"
            onPress={() => {
              handleClick();
            }}
            accessibilityLabel="Login"
          ></Button>
          <Button
            title="Sign Up"
            onPress={() => {
              handleClick();
            }}
            accessibilityLabel="Sign Up"
          ></Button>
        </View>
      </View>
      <View>
        <Text>MediMate</Text>
        <Image
          style={styles.ImageLarge}
          source={require("../assets/EggHatch.png")}
        />
        <Text>Feed your mate, feed your soul</Text>
      </View>

      <View>
        <Text>This is where the instructions will live!!!!!!!!!!!!!!</Text>
      </View>

      <View>
        <Text>This is where the instructions will live!!!!!!!!!!!!!!</Text>
      </View>

      <View>
        <Text>This is where the instructions will live!!!!!!!!!!!!!!</Text>
      </View>

      <View>
        {/* this email needs to be changed when the site is fully ready */}
        <a href="mailto:generic@gmail.com">Contact Us</a>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  ImageSmall: {
    width: 50,
    height: 50,
  },
  ImageLarge: {
    width: 150,
    height: 150,
  },
});
