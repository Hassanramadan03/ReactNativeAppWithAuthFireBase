import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
const Spiner = ({ size }) => {
    return (
        <View style={Style.spinerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

export { Spiner }
const Style = {
    spinerStyle: {
        alignItems: 'center',
        flex:1

    }
}