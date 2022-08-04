import { StyleSheet, Image, View, TextInput, Text, Pressable } from 'react-native'
import React, { useState } from 'react'


export default function PetName() {

    const [petName, setPetName] = useState("");

    function nameChoosen() {
        console.log(petName)
    }

    return (
        <View style={styles.container}>

            <Image style={styles.bird} source={require("../../assets/Bird/bird.gif")} />


            <TextInput
                placeholder="Name"
                value={petName}
                onChangeText={(text) => setPetName(text)}
                style={styles.input}
            />
            <Pressable onPress={nameChoosen} />
            <Text style={styles.text}>Please choose a name for your Medi-Mate</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '90%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid',
        borderwidth: 20,
    },
    bird: {
        height: 400,
        width: 400
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    text: {
        marginTop: 25,
    }
})