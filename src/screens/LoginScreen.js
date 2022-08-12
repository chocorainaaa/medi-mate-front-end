import React from "react";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Pressable,
  Linking,
  PixelRatio,
  useWindowDimensions,
} from "react-native";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Components/Metrics";

import app from "../../config/firebase";

const auth = app.auth();

export default function LoginScreen() {
  const { height, width } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firebaseId, setfirebaseId] = useState("");
  const url = "https://medi-mate-app.herokuapp.com/registration";

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    egg: require("../../assets/Egg/EggHatch.gif"),
  };

  async function postFirebaseId(firebaseId) {
    console.log(firebaseId);
    const data = {
      firebase_user_id: firebaseId,
      username: "test",
    };
    const response = fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      success: 200,
    });
    return response;
  }

  async function HandleSignUp() {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const firebaseId = userCredentials.user.uid;
        console.log(firebaseId);
        postFirebaseId(firebaseId);
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

  /* Egg Ratio */
  // screen width divided by egg width
  const ratio = 300 / 200;

  // ====================

  /* Font sizes */
  // Scale 20 for mobile and Scale 15 for desktop

  let descriptionFontSize = moderateScale(15);

  if (PixelRatio.get() <= 2) {
    descriptionFontSize = moderateScale(20);
  }

  // ====================

  /* Description and Input Container width */
  // mobile width at 250 and desktop at 400

  let containerWidth = width / 1.3;;
  let descriptionWidth = width / 1.3;;

  // if (PixelRatio.get() <= 2) {
  //   containerWidth = width / 1.3;
  //   descriptionWidth = width / 1.3;
  // }

  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <ImageBackground
        style={[styles.background, { height: height, width: width }]}
        source={images.background}
      >
        <View style={styles.header}>
          <Text style={styles.appname}>Medi-Mate</Text>
          <Text style={[styles.tagline, styles.headerMargin]}>
            Feed your mate, feed your soul!
          </Text>
          <Image
            style={[
              styles.egg,
              { width: 120, height: 80 * ratio },
              styles.headerMargin,
            ]}
            source={images.egg}
          />
        </View>

        <View style={[styles.formContainer, { width: containerWidth }]}>
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

          <View style={[styles.buttonContainer, { width: containerWidth }]}>
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

        </View>
        <Text
          style={[
            styles.description,
            { fontSize: descriptionFontSize },
            { width: descriptionWidth },
          ]}
        >
          Your mate will help you meditate! Pick your medi-mate, give them a
          name and help them stay healthy while you meditate. Navigate around
          the app using the menu in the pet house
        </Text>
        <View>
          <Pressable
            style={styles.contact}
            onPress={() => Linking.openURL("mailto:support@example.com")}
          >
            <Text style={styles.buttonText}>Contact Medi-Mate</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  appname: {
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(50),
    fontFamily: "VT323_400Regular",
    justifyContent: "center",
  },
  background: {
    resizeMode: "center",
    flex: 1,
    alignItems: "center",
    zIndex: -1,
  },
  button: {
    backgroundColor: "#0782F9",
    width: 110,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 800,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: "white",
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "bold",
    fontFamily: "VT323_400Regular",
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "VT323_400Regular",
  },
  contact: {
    display: "flex",
    fontWeight: "bold",
    fontFamily: "VT323_400Regular",
    fontSize: 16,
    backgroundColor: "#0782F9",
    padding: moderateScale(10),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(15),
    fontFamily: "VT323_400Regular",
    justifyContent: "center",
    marginBottom: 20,
    maxWidth: 800,
  },
  egg: {
    paddingTop: 50,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  formContainer: {
    maxWidth: 800,
    margin: moderateScale(20),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerMargin: {
    marginTop: 30,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  tagline: {
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(15),
    fontFamily: "VT323_400Regular",
    justifyContent: "center",
    marginBottom: 10,
  },
});
