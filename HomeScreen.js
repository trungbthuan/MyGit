import React from 'react';
import {Image, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DetailsScreen from './DetailsScreen';
import TestScreen from './TestScreen';
import CustomHeader from '../components/CustomHeader/CustomHeader.js';
import FetchDataJson from './FetchJson';
import styles from './styles';

class HomeScreen extends React.Component {
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
      <View style={{ flex: 1, backgroundColor: "#F6DDF8" }}>
        <CustomHeader navigation={this.props.navigation} />
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
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
    Test: { screen: TestScreen },
    FetchJson: { screen: FetchDataJson},
  }, {
    drawerWidth: 200,
    drawerBackgroundColor: '#F6DDF8',
    initialRouteName: 'Home',
    drawerPosition: 'left',
  },
);

export default createAppContainer(MyDrawerNavigator);
