import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ placeHolder, label, value, onChangeText ,secureTextEntry}) => {
    const { inputStyle, labelStyle, containerStyle } = style;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle} >{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                autoCorrect={true}
            />

        </View>
    );
};

const style = {
    containerStyle: {
        flexDirection: 'row',
        height: 40,
        flex: 1,
        alignItems: 'center'

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        height: 20,
        width: 100,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 13,
        lineHeight: 13,
        flex: 2

    }
}
export { Input }
