import React, {Component} from "react";
import {Path, Svg} from "react-native-svg";
import {StyleSheet, TouchableOpacity} from "react-native";

export default class NextButton extends Component {

    render() {
        return (
            <TouchableOpacity style={[this.props.style]}>
                <Svg
                    style={styles.arrowForwardMaterial}
                    viewBox="0 0 16.03 16.03"
                    preserveAspectRatio="none"
                >
                    <Path
                        strokeWidth={0}
                        fill="rgba(58,58,58,1)"
                        isClosed={true}
                        d="M8.02 0.00 L16.03 8.02 L8.02 16.03 L6.60 14.62 L12.19 9.00 L0.00 9.00 L0.00 7.03 L12.19 7.03 L6.60 1.42 L8.02 0.00 Z"
                    />
                </Svg>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    arrowForwardMaterial: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        borderColor: "transparent"
    }
});
