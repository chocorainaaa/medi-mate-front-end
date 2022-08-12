import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import {
    horizontalScale,
    verticalScale,
    moderateScale,
} from "../Components/Metrics";
/// creating the animation
const Ring = ({ delay, start, breathValue }) => {

    const isMounted = useRef(false);
    const ring = useSharedValue(0);

    useEffect(() => {
        if (isMounted.current) {
            ring.value = withDelay(
                delay,
                withRepeat(
                    withTiming(1, {
                        duration: (breathValue * 1000),
                    }),
                    -1, true
                ),
                console.log(breathValue)
            );
        } else {
            isMounted.current = true;
        }
    }, [start]);

    const style = useAnimatedStyle(() => {
        return {
            opacity: 1 - ring.value,
            transform: [
                {
                    scale: interpolate(ring.value, [0, 1], [0, 4]),
                },
            ],
        };
    });




    return (
        <Animated.View style={[styles.ring, style]} />
    )
};

// creating the jsx return function

export default function AnimatedRing({ breathValue, start }) {
    return (
        <View style={styles.container}>
            <Ring delay={0} breathValue={breathValue} start={start} />
            <Ring delay={800} breathValue={breathValue} start={start} />
            <Ring delay={1600} breathValue={breathValue} start={start} />
            {/* <Ring delay={3000} breathValue={breathValue} start={start} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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
