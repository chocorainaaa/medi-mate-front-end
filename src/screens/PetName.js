import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  Pressable,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Components/Metrics";

export default function PetName({ navigation }) {
  const { height, width } = useWindowDimensions();
  const { user } = useContext(AuthenticatedUserContext);

  const url = "https://medi-mate-app.herokuapp.com/register-pet";

  const [petName, setPetName] = useState("");

  const data = {
    firebase_user_id: user.uid,
    pet_name: petName,
  };

  async function postPetName() {
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

  const images = {
    background: require("../../assets/background/forest-background_200_640x640.png"),
    bird: require("../../assets/Bird/bird.gif")
  };

  //   function nameChoosen() {
  //     console.log(petName);
  //     //add async post request here

  //     navigation.navigate("Home");

  //     // navigation.navigate('Market', { screen: 'MarketInfo' })
  //   }

  return (
    <ImageBackground
      style={[styles.background, { height: height, width: width }]}
      source={images.background}
    >
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/bird.gif")}
        />
        <Text style={styles.text}>Please choose a name for your Medi-Mate</Text>
        <TextInput
          id={"input"}
          placeholder="Medi-Mate Name"
          value={petName}
          onChangeText={(text) => setPetName(text)}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={postPetName}>
          <Text style={styles.buttonText}>Set Name</Text>
        </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    alignItems: "center",
    zIndex: -1,
  },
  bird: {
    height: 350,
    width: 350,
    marginTop: verticalScale(49),
  },
  button: {
    display: "flex",
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    width: 110,
},
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "VT323_400Regular",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(20),
    fontFamily: "VT323_400Regular",
    alignItems: "center",
  },
});
