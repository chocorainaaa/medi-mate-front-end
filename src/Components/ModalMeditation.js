import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import UniSlider from "./Slider.js";
import Bird from "../../assets/bird-static.png";
import { moderateScale } from "./Metrics.js";

const ModalMed = ({
  breathValue,
  lengthChange,
  breathChange,
  setStartMeditation,
  lengthValue,
  setLengthValue,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const time = lengthValue / 60;
  const displayTime = (time + "").substring(0, 5);

  const images = {
    textBox: require("../../assets/text-boxes/Text-box-large.png"),
    modalTextBox: require("../../assets/text-boxes/Modal-text-box.png"),
  };

  const { height, width } = useWindowDimensions();

  function textBoxWidth() {
    return Math.floor(width) / 0.6;
  }
  function textBoxHeight() {
    return Math.floor(height) / 2;
  }

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
                <Text style={styles.modalText}>
                  Please select your meditation timings
                </Text>

                <Text style={styles.modalText}>Meditation session length</Text>
                <View style={styles.slider}>
                  <Text style={styles.modalText}>0 mins</Text>
                  <UniSlider
                    id={"length"}
                    label={`Total meditation time is ${displayTime} minuites`}
                    min={0}
                    max={1800}
                    lengthValue={lengthValue}
                    onChange={lengthChange}
                    setLengthValue={setLengthValue}
                  />
                  <Text style={styles.modalText}>30 mins</Text>
                </View>

                <Text style={styles.modalText}>Breath in and out length</Text>
                <View style={styles.slider}>
                  <Text style={styles.modalText}>0 secs</Text>
                  <UniSlider
                    label={`Breath in for ${breathValue} seconds breath out for ${breathValue} seconds`}
                    id={"in"}
                    min={0}
                    max={10}
                    onChange={breathChange}
                  />
                  <Text style={styles.modalText}>10 secs</Text>
                </View>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setStartMeditation(true);
                  }}
                >
                  <Text style={styles.textStyle}>Click to Meditate</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>
      <Pressable
        id={"timerTrigger"}
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Set meditation times</Text>
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
    backgroundColor: "#ffffff",
    padding: 6,
    elevation: 2,
    minWidth: 110,
  },
  buttonClose: {
    backgroundColor: "#285cc4",
  },
  centeredView: {
    flex: 1,
    marginTop: 40,
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

  slider: {
    flexDirection: "row",
  },
  lastSlider: {
    flexDirection: "row",
    marginBottom: 30,
  },
});

export default ModalMed;
