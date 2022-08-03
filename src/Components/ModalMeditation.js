import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import UniSlider from "./Slider";
import Bird from "../../assets/bird-static.png";
import Timer from "./Timer";

const ModalMed = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [startMeditation, setStartMeditation] = useState(false);
    const [lengthValue, setLengthValue] = useState(5);
    const [breathValue, setBreathValue] = useState(5);
    const [holdValue, setHoldValue] = useState(5);


    function lengthChange(e) {
        console.log(e.target.value)
        setLengthValue(e.target.value)
    }
    function breathChange(e) {
        console.log(e.target.value)
        setBreathValue(e.target.value)
    }
    function holdChange(e) {
        console.log(e.target.value)
        setHoldValue(e.target.value)
    }


    // const meditationTrigger = () => {
    //     setStartMeditation(true);
    // };

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

                        <Text style={styles.modalText}>Meditation length</Text>{}
                        <View style={styles.slider}>
                            <span>0 mins</span><UniSlider id={"length"} min={0} max={1800} lengthValue={lengthValue} onChange={lengthChange} /><span>30 mins</span>
                        </View>
                        <Timer lengthValue={lengthValue} />


                        <Text style={styles.modalText}>Breath in</Text>
                        <View style={styles.slider}>
                            <span>0 secs</span><UniSlider label={"Breath in for 5 seconds breath out for 5 seconds"} id={"in"} min={0} max={10} onChange={breathChange} /><span>10 secs</span>
                        </View>


                        <Text style={styles.modalText}>Hold</Text>
                        <View style={styles.slider}>
                            <span>0 secs</span><UniSlider label={"Hold your breath for 5 seconds"} id={"hold"} min={0} max={10} onChange={holdChange} /><span>10 secs</span>
                        </View>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              setModalVisible(!modalVisible)
                              setStartMeditation(true);
                            }
                          }
                        >
                            <Text style={styles.textStyle}>Click to Meditate</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                id={"timerTrigger"}
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                    setModalVisible(true)
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
        textAlign: "center",
        paddingTop: 15
    },
    slider: {
        flexDirection: "row",
    },
    lastSlider: {
        flexDirection: "row",
        marginBottom: 30
    }
});

export default ModalMed;
