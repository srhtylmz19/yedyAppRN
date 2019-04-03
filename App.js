import React from "react";
import {YellowBox} from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgotPassword from "./src/screens/ForgotPassword";
import Homepage from "./src/screens/Homepage";
import PlaceDetail from "./src/screens/PlaceDetail";
import Filter from "./src/screens/Filter";
import FilterResult from "./src/screens/FilterResult";
import PlaceList from "./src/screens/PlaceList";
import {StackNavigator} from "react-navigation";

const StackNavigation = StackNavigator(
    {


        Filter: {
            screen: Filter
        },

        FilterResult: {
            screen: FilterResult
        },


        Homepage: {
            screen: Homepage
        },

        Login: {
            screen: Login
        },










        Register: {
            screen: Register
        },
        ForgotPassword: {
            screen: ForgotPassword
        },


        PlaceDetail: {
            screen: PlaceDetail
        },
        PlaceList: {
            screen: PlaceList
        },

    },
    {
        headerMode: "none"
    }
);
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: true
        };
        YellowBox.ignoreWarnings([
            "Warning: componentWillMount is deprecated",
            "Warning: componentWillReceiveProps is deprecated",
            "Warning: componentWillUpdate is deprecated"
        ]);
    }

    render() {
        return <StackNavigation/>;
    }
}
