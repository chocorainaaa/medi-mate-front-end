import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import UniSlider from "./Slider";
import Bird from "../../assets/bird-static.png";

const ModalMed = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [startMeditation, setStartMeditation] = useState(false);

  const meditationTrigger = () => {
    setStartMeditation(true);
  };

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
            <Text style={styles.modalText}>
              Please select your breathing times
            </Text>
            <Text>Meditation length</Text>{" "}
            <UniSlider id={"length"} min={0} max={100} startMeditation={meditationTrigger} />
            {/* <Text>Breath in</Text><UniSlider id={"in"} min={4} max={10} />
                        <Text>Hold</Text><UniSlider id={"hold"} min={0} max={10} />
                        <Text>Breath out</Text><UniSlider id={"out"} min={4} max={10} /> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Click to Meditate</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        id={"timerTrigger"}
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setModalVisible(true)
            setStartMeditation(true)
        }}
      >
        <Text style={styles.textStyle}>Set times</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundImage: `url(${Bird})`,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalMed;
