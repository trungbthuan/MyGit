import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={splashStyles.viewStyles}>
                <Image
                    source={require('../img/react_native.png')}
                    style={splashStyles.icon}>
                </Image>
            </View>
        );
    }
}

const splashStyles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4dac3'
    },
    textStyles: {
        color: '#152cfd',
        fontSize: 40,
        fontWeight: 'bold'
    },
    imageSplash: {
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: '#e4dac3'
    }
})
