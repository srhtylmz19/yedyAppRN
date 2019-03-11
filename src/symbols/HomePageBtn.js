import React, {Component} from "react";
import {Svg, Path} from "react-native-svg";
import {View, StyleSheet, TouchableOpacity} from "react-native";

export default class HomePageBtn extends Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style]}>
                <Svg
                    style={styles.filterTiltShiftMaterial}
                    viewBox="0 0 19.87 19.87"
                    preserveAspectRatio="none"
                >
                    <Path
                        strokeWidth={0}
                        fill="rgba(58,58,58,1)"
                        isClosed={true}
                        d="M3.60 17.66 L5.02 16.27 L8.95 17.86 L8.95 19.87 L3.60 17.66 Z M10.92 17.86 L14.81 16.27 L16.27 17.66 L10.92 19.87 L10.92 17.86 Z M16.27 14.86 L17.86 10.97 L19.87 10.97 L17.66 16.27 L16.27 14.86 Z M12.94 9.94 C12.94 10.46 12.80 10.96 12.53 11.42 C12.26 11.89 11.89 12.26 11.42 12.53 C10.96 12.80 10.46 12.94 9.94 12.94 C9.41 12.94 8.91 12.80 8.45 12.53 C7.98 12.26 7.62 11.89 7.34 11.42 C7.07 10.96 6.94 10.46 6.94 9.94 C6.94 9.41 7.07 8.91 7.34 8.45 C7.62 7.98 7.98 7.62 8.45 7.34 C8.91 7.07 9.41 6.94 9.94 6.94 C10.46 6.94 10.96 7.07 11.42 7.34 C11.89 7.62 12.26 7.98 12.53 8.45 C12.80 8.91 12.94 9.41 12.94 9.94 Z M2.02 10.92 L3.60 14.81 L2.21 16.27 L0.00 10.92 L2.02 10.92 Z M3.60 5.02 L2.02 8.95 L0.00 8.95 L2.21 3.60 L3.60 5.02 Z M17.86 8.95 L16.27 5.02 L17.66 3.60 L19.87 8.95 L17.86 8.95 Z M16.27 2.21 L14.86 3.60 L10.92 2.02 L10.92 0.00 L16.27 2.21 Z M8.95 2.02 L5.02 3.60 L3.60 2.21 L8.95 0.00 L8.95 2.02 Z"
                    />
                </Svg>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    filterTiltShiftMaterial: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        borderColor: "transparent"
    }
});
