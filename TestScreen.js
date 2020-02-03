import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native';
import CustomHeader from '../components/CustomHeader/CustomHeader.js';
import styles from './styles';

export default class TestScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'My TestScreen',
        drawerIcon: () => (
            <Image
                source={require('../img/test.jpg')}
                style={styles.icon}>
            </Image>
        ),
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F6DDF8" }}>
                <CustomHeader navigation={this.props.navigation} />
                <View style={styles.viewContainer}>
                    <Text>Test Screen</Text>
                    <Button
                        title="Go Back"
                        onPress={() => this.props.navigation.navigate('Home')}>
                    </Button>
                </View>
            </View>
        )
    }
}
