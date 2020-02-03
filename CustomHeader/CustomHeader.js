import React from "react";
import {View, TouchableOpacity, Image} from "react-native";
import styles from './styles';

const CustomHeader = ({navigation}) => (
<View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
            source={require('./drawer.png')}
            style={styles.iconDrawer}>
        </Image>
    </TouchableOpacity>
</View>
);
export default CustomHeader;