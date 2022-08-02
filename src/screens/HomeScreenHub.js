import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useContext } from "react";
import app from "../../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import ModalComponent from "../Components/modal";

const auth = app.auth();

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);

  async function handleSignout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  // const images = {
  //   background: "../../assets/background/placeholder-bkgnd.png",
  //   owl: "",
  //   birdhouse: "",
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/background/placeholder-bkgnd.png")}
      >
        <Image
          style={styles.bird}
          source={require("../../assets/Bird/bird.gif")}
        />

        <ModalComponent></ModalComponent>
        <Pressable
          style={styles.petHouse}
          onPress={() => {
            console.log("clicked");
          }}
        >
          <Image
            style={styles.bird}
            source={require("../../assets/pet-home/pet-house-placeholder.png")}
          />
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bird: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  petHouse: {
    width: "100%",
    alignItems: "center",
  },
});

{
  /* <Text>Home Screen</Text>
      <Button title="logout" onPress={handleSignout} />
      <Text>Your UID: is {user.uid} </Text>
      <Button
        title="Go to Meditation"
        onPress={() => navigation.navigate("Meditation")}
      />
      <Button
        title="Go to Stats"
        onPress={() => navigation.navigate("Stats")}
      />
      <Button
        title="Go to Mood Logger"
        onPress={() => navigation.navigate("MoodLogger")}
      />
      <Button
        title="Go to Quote"
        onPress={() => navigation.navigate("QuoteGenerator")}
      /> */
}
