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



class Api extends Component {


    getFilterData()
    {
        fetch('http://cuziden.com/api/filterProducts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                //this.loadingButton.showLoading(false);
                this.setState({products:responseJson,showingProducts:responseJson,filteredProductSearch:true});
                this.setModalVisible(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getRegions()
    {
        fetch('http://68.183.208.190/api/v1/regions', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response)=>response.json())
            .then((responseJson)=>{
                //this.setState({zones:responseJson})
                return responseJson
            });
    }


}

const api = new Api();
export default api;