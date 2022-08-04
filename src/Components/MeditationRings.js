import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { Keyframe } from 'react-native-reanimated';








export default function MeditationRings() {

    const circleSize = new Keyframe({
        0: {
            transform: [{ scale: 1 }],
        },
        50: {
            transform: [{ scale: 2 }],
        },
        100: {
            transform: [{ scale: 1 }],
        }
    })

    return <Animated.View style={styles.circle1} entering={circleSize.duration(5000)} />

}


const styles = StyleSheet.create({
    circle1: {
        animationIterationCount: "infinite",
        borderRadius: "50%",
        width: 100,
        minHeight: 100,
        borderWidth: 25,
        borderColor: "black",
        backgroundColor: "white",
        bottom: 100,
        zIndex: -1,
    }
});