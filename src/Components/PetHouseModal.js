import React, { useState, useContext } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
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

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello {user.uid}!</Text>
            {/* Navigations */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigation.navigate("Meditation");
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Medidation</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigation.navigate("Stats");
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Stats</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigation.navigate("MoodLogger");
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Mood Logger</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigation.navigate("QuoteGenerator");
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Quote</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSignout}
            >
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>

            {/* Close Modal */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  // modalViewContainer: {
  //   width:
  // },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  petHouseWrapper: {
    width: "fitContent",
    alignItems: "center",
  },
  // petHouse: {
  //   width: 200,
  //   height: 200,
  //   justifyContent: "center",
  // },
});

export default PetHouseModal;
