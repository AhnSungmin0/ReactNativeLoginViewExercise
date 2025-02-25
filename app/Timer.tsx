import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react'

interface TimerProps {
    runTimeSec: number,
    color: string
}

export default function Timer({runTimeSec,color}: TimerProps) {
    const [timerValue, setTimerValue] = React.useState<number>(runTimeSec);
    const [timerColor, setTimerColor] = React.useState<string>(color);
    useEffect(() => {
        function changeColor() {
            const backgroundInterval = setInterval(() => {
                setTimerColor(timerColor => timerColor === 'red' ? 'white' : 'red');
            }, 1000);
        }
        const timer = setInterval(() => {
            if(timerValue === 0) {
                clearInterval(timer);
                changeColor();
                return 0;
            }
            setTimerValue(timerValue => timerValue - 1);
        }, 1000);//so base time is milliseconds
        return () => {
            clearInterval(timer);
        };
    })
    return (
            <View style={{...styles.container, backgroundColor: timerColor}}>
                <Text style={styles.text}>{ timerValue }</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        backgroundColor: 'white',        
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})