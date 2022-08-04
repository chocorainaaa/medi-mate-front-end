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
                id={"input"}
                placeholder="Name"
                value={petName}
                onChangeText={(text) => setPetName(text)}
                style={styles.input}
            />
            <Pressable style={styles.setName} onPress={nameChoosen}>
                <Text style={styles.text}>Set Name</Text>
            </Pressable>
            <Text >Please choose a name for your Medi-Mate</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
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