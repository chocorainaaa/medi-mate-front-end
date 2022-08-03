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
// import app from "../../config/firebase";
// import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import ModalComponent from "../Components/modal";

// const auth = app.auth();

const HomeScreen = ({ navigation }) => {
  // const { user } = useContext(AuthenticatedUserContext);

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
          style={[styles.petImage, styles.petPosition]}
          source={require("../../assets/Bird/druid-owl..png")}
        />
        <ModalComponent navigation={navigation}></ModalComponent>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  petImage: {
    width: 200,
    height: 200,
    zIndex: 0,
  },
  petPosition: {
    position: "relative",
    top: "60%",
    left: "30%",
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    // flex: 1,
    // width: null,
    // height: null,
    // resizeMode: "cover",

    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
