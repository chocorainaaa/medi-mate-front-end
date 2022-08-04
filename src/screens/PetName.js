import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function PetName() {

    const [petName, setPetName] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Please choose a name for your Medi-Mate"
                value={petName}
                onChangeText={(text) => setPetName(text)}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignself: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    }
})