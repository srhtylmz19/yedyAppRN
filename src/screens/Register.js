import React, {Component} from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from "react-native";

export default class Register extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text adjustsFontSizeToFit={true}
                      numberOfLines={1}
                      style={{textAlignVertical: "center", textAlign: "center", color: "rgba(193,27,47,1)"}}>Marmara
                    Bölgesi, İstanbul</Text>
                <Text adjustsFontSizeToFit={true}
                      numberOfLines={1} style={{textAlignVertical: "center", textAlign: "center"}}>İstemiş olduğunuz
                    sorgu sonucu</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1
    }
});
