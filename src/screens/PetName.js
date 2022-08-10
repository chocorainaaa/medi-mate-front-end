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

  //   function nameChoosen() {
  //     console.log(petName);
  //     //add async post request here

  //     navigation.navigate("Home");

  //     // navigation.navigate('Market', { screen: 'MarketInfo' })
  //   }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/background/placeholder-bkgnd.png")}
    >
      <View style={styles.container}>
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/bird.gif")}
        />
        <TextInput
          id={"input"}
          placeholder="Name"
          value={petName}
          onChangeText={(text) => setPetName(text)}
          style={styles.input}
        />
        <Pressable style={styles.setName} onPress={postPetName}>
          <Text style={styles.text}>Set Name</Text>
        </Pressable>
        <Text style={styles.text}>Please choose a name for your Medi-Mate</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    display: "flex",
    width: "100vw",
    height: "100%vh",
    alignItems: "center",
    justifyContent: "center",
  },
  bird: {
    height: 400,
    width: 400,
    marginTop: 40,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    alignSelf: "center",
    marginTop: 15,
    color: "white",
  },
  setName: {
    height: 50,
    width: 100,
    backgroundColor: "blue",
    marginTop: 15,
    marginBottom: 15,
  },
});
