import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, 
        TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import CustomHeader from '../components/CustomHeader/CustomHeader.js';
import styles from './styles';

function ItemTouchFlatList({id, title, releaseYear}) {
    handleOnPress = (ten) => {
        Alert.alert("Hello " + ten)
    }

    return (
        <TouchableOpacity onPress={() => this.handleOnPress({title})} style={[styles.item]}>
            <View style={myStyles.viewMain}>
                <View style={myStyles.viewMain1}>
                    <Image style={myStyles.imageLeft} source={require('../img/transformer.jpg')} />
                </View>
                <View style={myStyles.viewMain2}>
                    <Text style={myStyles.title}>{title}</Text>
                    <Text style={myStyles.title}>{releaseYear}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default class FetchDataJson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true}
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static navigationOptions = {
        drawerLabel: 'Fetch Json',
        drawerIcon: () => (
            <Image
                source={require('../img/json_icon.jpg')}
                style={styles.icon}>
            </Image>
        ),
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <CustomHeader navigation={this.props.navigation} />
                <SafeAreaView style={myStyles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => (
                            <ItemTouchFlatList
                                id={item.id}
                                title={'Tên: ' + item.title}
                                releaseYear={'Năm: ' + item.releaseYear}
                            />
                        )}
                        keyExtractor={({ id }, index) => id}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 5,
        marginVertical: 1,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
    },
    imageLeft: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    viewMain: {
        flex: 1,
        flexDirection: 'row',
    },
    viewMain1: {
        flex: 1,
        width: 100,
        height: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewMain2: {
        flex: 4,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});
