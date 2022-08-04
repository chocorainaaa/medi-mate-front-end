import { StyleSheet, Image, View, TextInput, Text, Pressable, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native-web';


export default function PetName() {

    const { height, width } = useWindowDimensions()

    const [petName, setPetName] = useState("");

    function nameChoosen() {
        console.log(petName)
    }

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require("../../assets/background/placeholder-bkgnd.png")}
        >

            <View style={styles.container}>

                <Image style={styles.bird} source={require("../../assets/Bird/bird.gif")} />
                <TextInput
                    id={"input"}
                    placeholder="Name"
                    value={petName}
                    onChangeText={(text) => setPetName(text)}
                    style={styles.input}
                />
                <Pressable style={styles.setName} onPress={nameChoosen}>
                    <Text style={styles.text}>Set Name</Text>
                </Pressable>
                <Text style={styles.text}>Please choose a name for your Medi-Mate</Text>
            </View>
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        display: 'flex',
        width: "100vw",
        height: "100%vh",
        alignItems: 'center',
        justifyContent: 'center',
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
        alignSelf: 'center',
        marginTop: 15,
        color: 'white'
    },
    setName: {
        height: 50,
        width: 100,
        backgroundColor: 'blue',
        marginTop: 15,
        marginBottom: 15,
    }
})