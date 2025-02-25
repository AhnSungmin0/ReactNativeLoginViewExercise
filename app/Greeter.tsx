import { View, Text } from 'react-native'
import React from 'react'

interface GreeterProps {
    userName: string
}

export default function Greeter({userName}: GreeterProps) {
    return (
        <View>
            <Text>Greetings, {userName}</Text>
        </View>
    )
}
