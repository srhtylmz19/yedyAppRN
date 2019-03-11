import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ForgotPasswordElement extends Component {
    // Only for displaying symbol in BuilderX.
    static containerStyle = {
        width: 100,
        height: 14
    };

    render() {
        return (
            <TouchableOpacity style={[this.props.style]}>
                <Text
                    style={styles.sifremiUnuttum}
                    onPress={() => {
                        this.props.navigation.push("ForgotPassword");
                    }}
                >
                    Şifremi Unuttum
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    sifremiUnuttum: {
        backgroundColor: "transparent",
        fontSize: 14,
        fontFamily: "Helvetica",
        color: "rgba(193,27,47,1)"
    }
});
