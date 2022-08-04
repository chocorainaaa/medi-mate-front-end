import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';



/// creating the animation
const Ring = ({ delay }) => {
    const ring = useSharedValue(0);
    const style = useAnimatedStyle(() => {
        return {
            opacity: 0.8 - ring.value,
            transform: [
                {
                    scale: interpolate(ring.value, [0, 1], [0, 4]),
                },
            ],
        };
    });

    useEffect(() => {
        ring.value = withDelay(
            delay,
            withRepeat(
                withTiming(1, {
                    duration: 10000,
                }),
                -1, true
            )
        );
    }, [])


    return (
        <Animated.View style={[styles.ring, style]} />
    )
};

// creating the jsx return function 

export default function AnimatedRing() {
    return (
        <View style={styles.container}>
            <Ring delay={0} />
            <Ring delay={1000} />
            <Ring delay={2000} />
            <Ring delay={3000} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ring: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 10,
        borderColor: "gold",
    },
});

