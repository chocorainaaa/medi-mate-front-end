import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  Linking
} from "react-native";
import app from "../../config/firebase";

const auth = app.auth();

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    textbox: require("../../assets/text-boxes/Text-box-large.png"),
    egg: require("../../assets/Egg/EggHatch.gif"),
  };

  async function HandleSignUp() {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  }

  async function HandleLogin() {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          resizeMode: "center",
          resizeMethod: "center",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          zIndex: -1,
        }}
        source={images.background}
      >
        <ImageBackground
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            resizeMode: "center",
            resizeMethod: "center",
            marginTop: -300,
            marginLeft: -250,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          source={images.egg}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              fontFamily: "VT323_400Regular",
              justifyContent: "center",
            }}
          >
            Medi-Mate
          </Text>
        </ImageBackground>
        <Text 
        style={{
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              fontFamily: "VT323_400Regular",
              justifyContent: "center",
            }}>Feed your mate, feed your soul!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={HandleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={HandleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={{
            width: "100%",
            height: 100,
            position: "absolute",
            marginTop: 375,
            resizeMode: "center",
            resizeMethod: "center",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
          source={images.textbox}
        >
          <Text
          style={{
              color: "black",
              fontWeight: "700",
              fontSize: 10,
              fontFamily: "VT323_400Regular",
              position: 'absolute',
              flex: 1,
              justifyContent: "center",
            }}>
            Welcome to Medi-Mate, your pet guided meditation journey. To start please register an account, you will be asked choose an egg where your new Medi-mate is eagerly waiting inside to meet you. After you choose and egg you will have to name your new Medi-mate to start your journey together. Once this is done you will be taken to the PetHouse screen, from here you can click on the pet house to go to different areas of the app such as meditation. Inside meditation you will be asked to choose a total meditation length and the timings of breathing in and breathing out. Once these are set just breath in and out to your Medi-mates meditation rings. You can click back from the meditation screen and it will take you to the homepage, inside there pet house there are more options such as stats, This is where you can see your total meditation time and many more ways to track your progress. I hope you enjoy starting this journey with your new Medi-Mate!!
          </Text>
        </ImageBackground>
        </ImageBackground>
        <View>
        <Button onPress={() => Linking.openURL('mailto:support@example.com') }
      title="Contact Medi-Mate" />
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "VT323_400Regular",
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontFamily: "VT323_400Regular",
    fontSize: 16,
  },
});
