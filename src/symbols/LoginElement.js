import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class LoginElement extends Component {
    // Only for displaying symbol in BuilderX.
    static containerStyle = {
        width: 186,
        height: 14
    };

    render() {
        return (
            <TouchableOpacity style={[this.props.style]}>
                <Text
                    style={styles.hesabinizVarMiGi}
                    onPress={() => {
                        this.props.navigation.push("Login");
                    }}
                >
                    Hesabınız var mı? Giriş Yapın
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    hesabinizVarMiGi: {
        backgroundColor: "transparent",
        fontSize: 14,
        fontFamily: "Helvetica",
        color: "rgba(193,27,47,1)"
    }
});
