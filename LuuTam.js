import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm'

class SplashScreen extends React.Component {
    render() {
        return (
            <View style={splashStyles.viewStyles}>
                <Text style={splashStyles.textStyles}>
                    Đây là SplashScreen
        </Text>
            </View>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <SplashScreen />
            );
        }
        return (
            <LoginForm />
        );
    }
}

const splashStyles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4dac3',
    },
    textStyles: {
        color: '#152cfd',
        fontSize: 40,
        fontWeight: 'bold',
    }
})

// const App: () => React$Node = () => {
//   return <LoginForm />;
// };

// export default App;
