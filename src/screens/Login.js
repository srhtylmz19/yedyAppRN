import React, {Component} from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from "react-native";
import {createStackNavigator, createAppContainer,StackActions,NavigationActions } from 'react-navigation';



export default class Login extends Component {

    componentDidMount() {

        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            return this.props
                .navigation
                .dispatch(NavigationActions.reset(
                    {
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Filter'})
                        ]
                    }));

        }, 2000);
    }

    render() {
        return (
            <View style={styles.root}>
                <Image
                    source={require("../assets/landing.jpg")}
                    style={styles.loginBg}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1
    },
    loginBg: {
        position: "absolute",
        top: "0.00%",
        left: "0.00%",
        height: "100.75%",
        width: "100.80%",
        backgroundColor: "transparent"
    }
});
