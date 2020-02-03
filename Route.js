import React from 'react';
import { Image, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DetailsScreen from './DetailsScreen';
import TestScreen from './TestScreen';
import HomeScreen from './HomeScreen';

class Route extends React.Component {
    static navigationOptions = {
        drawerLabel: 'My Home',
        drawerIcon: () => (
            <Image
                source={require('../img/cloud.jpg')}
                style={styles.icon}>
            </Image>
        ),
    };
    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('../img/drawer.png')}
                        style={styles.iconDrawer}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.viewContainer}>
                    <Text>Home Screen</Text>
                    <Button
                        style={{ paddingTop: 20 }}
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Details')}></Button>
                </View>
            </View>
        );
    }
}

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Details: { screen: DetailsScreen },
        Test: { screen: TestScreen },
    }, {
    drawerWidth: 200,
    drawerBackgroundColor: '#F6DDF8',
    initialRouteName: 'Home',
    drawerPosition: 'left',
},
);

const styles = StyleSheet.create({
    iconDrawer: {
        width: 24,
        height: 24,
        marginLeft: 5,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 5,
        borderRadius: 50,
    },
    viewContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
});

export default createAppContainer(MyDrawerNavigator);
