import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default class RegisterTextElement extends Component {
    // Only for displaying symbol in BuilderX.
    static containerStyle = {
        width: 189,
        height: 14
    };

    render() {
        return (
            <TouchableOpacity style={[this.props.style]}>
                <Text style={styles.hesabinizYokMuKa}>
                    Hesabınız yok mu? Kayıt Olun
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    hesabinizYokMuKa: {
        backgroundColor: "transparent",
        fontSize: 14,
        fontFamily: "Helvetica",
        color: "rgba(193,27,47,1)"
    }
});
