import React, { useState, useContext } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import app from "../../config/firebase";

const auth = app.auth();

const PetHouseModal = ({ navigation, image, petHouseStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useContext(AuthenticatedUserContext);

  async function handleSignout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  const { height, width } = useWindowDimensions();

  function textBoxWidth() {
    return Math.floor(width) / 0.8;
  }
  function textBoxHeight() {
    return Math.floor(height) / 2;
  }

  const images = {
    textBox: require("../../assets/text-boxes/Text-box-large.png"),
    modalTextBox: require("../../assets/text-boxes/Modal-text-box.png"),
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ImageBackground
            source={images.textBox}
            style={{
              height: textBoxWidth(),
              width: textBoxHeight(),
              resizeMode: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello {user.uid}!</Text>

                <View style={styles.buttonSpace}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      navigation.navigate("Meditation");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Meditation</Text>
                  </Pressable>
                </View>

                <View style={styles.buttonSpace}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      navigation.navigate("Stats");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Stats</Text>
                  </Pressable>
                </View>

                <View style={styles.buttonSpace}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      navigation.navigate("MoodLogger");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Mood Logger</Text>
                  </Pressable>
                </View>

                <View style={styles.buttonSpace}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      navigation.navigate("QuoteGenerator");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Quote</Text>
                  </Pressable>
                </View>

                <View style={styles.buttonSpace}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleSignout}
                  >
                    <Text style={styles.textStyle}>Logout</Text>
                  </Pressable>
                </View>

                <View style={styles.buttonSpace}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      <Pressable
        style={styles.petHouseWrapper}
        onPress={() => setModalVisible(true)}
      >
        <Image style={petHouseStyle} source={image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpace: {
    padding: 5,
  },
  button: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    elevation: 2,
    minWidth: 110,
  },
  buttonClose: {
    backgroundColor: "#285cc4",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "VT323_400Regular",
  },

  textStyle: {
    color: "black",
    fontFamily: "VT323_400Regular",
    fontWeight: "bold",
    textAlign: "center",
  },

  petHouseWrapper: {
    // width: "fitContent",
    alignItems: "center",
  },
});

export default PetHouseModal;
