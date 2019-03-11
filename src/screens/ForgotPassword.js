import React, {Component} from "react";
import {Center} from "@builderx/utils";
import RegisterElement from "../symbols/RegisterElement";
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

export default class ForgotPassword extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Image
                    source={require("../assets/1a9f0964e9a6eedf88f62a6b2b5d383961232aad.png")}
                    style={styles.loginBg}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.push("Homepage");
                    }}
                >
                    <View style={styles.rectangle2}/>
                    <Center>
                        <Text style={styles.sifremiSifirla}>Şifremi Sıfırla</Text>
                    </Center>
                </TouchableOpacity>
                <RegisterElement
                    style={styles.registerElement}
                    navigation={this.props.navigation}
                    onPress={() => {
                        this.props.navigation.push("Login");
                    }}
                />
                <View style={styles.email}>
                    <View style={styles.rectangle}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                </View>
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
    },
    button: {
        position: "absolute",
        top: "67.62%",
        left: "32.27%",
        height: "6.00%",
        width: "36.53%"
    },
    rectangle2: {
        position: "absolute",
        top: "0.00%",
        left: "0.00%",
        height: "100.00%",
        width: "100.00%",
        borderWidth: 1,
        borderColor: "rgba(151,151,151,1)",
        borderRadius: 8,
        backgroundColor: "rgba(193,27,47,1)"
    },
    sifremiSifirla: {
        position: "absolute",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 14
    },
    email: {
        position: "absolute",
        top: "47.38%",
        left: "9.87%",
        height: "6.00%",
        width: "81.33%"
    },
    rectangle: {
        position: "absolute",
        top: "0.00%",
        left: "0.00%",
        height: "100.00%",
        width: "100.00%",
        backgroundColor: "rgba(227,227,227,0.3986073369565217)"
    },
    textInput: {
        position: "absolute",
        top: "27.50%",
        left: "4.92%",
        height: "42.50%",
        width: "93.44%",
        color: "rgba(3,3,3,1)",
        fontSize: 14
    },
    registerElement: {
        position: "absolute",
        top: 688,
        left: 95,
        height: 14,
        width: 186
    }
});
