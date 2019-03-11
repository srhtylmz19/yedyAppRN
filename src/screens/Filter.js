import React, {Component} from "react";
import {Center} from "@builderx/utils";
import {View, TouchableOpacity, Text, StyleSheet, Image,Dimensions,ScrollView} from "react-native";
import {Container, Header, Left, Body, Right, Button, Icon, Title, Picker, Form, ListItem} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { CheckBox } from 'react-native-elements'

const screen_width = Dimensions.get('window').width;
const screen_heigth = Dimensions.get('window').height;


export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            zone_id : null,
            city_id : null,
            checkedStar1:true,
            checkedStar2:false,
            checkedStar3:false,
            flavorPoint:true,
            zones:[
                {
                    label: 'Marmara Bölgesi',
                    value: 'Marmara Bölgesi',
                },
                {
                    label: 'Ege Bölgesi',
                    value: 'Ege Bölgesi',
                },
                {
                    label: 'Akdeniz Bölgesi',
                    value: 'Akdeniz Bölgesi',
                },
                {
                    label: 'Karadeniz Bölgesi',
                    value: 'Karadeniz Bölgesi',
                },
                {
                    label: 'iç Anadolu Bölgesi',
                    value: 'İç Anadolu Bölgesi',
                },
                {
                    label: 'Güneydoğu Bölgesi',
                    value: 'Güneydoğu Bölgesi',
                },
            ],
            cities:[

                {
                    label: 'İstanbul',
                    value: 'İstanbul',
                },
                {
                    label: 'Çanakkale',
                    value: 'Çanakkale',
                },
                {
                    label: 'Çorlu',
                    value: 'Çorlu',
                },
                {
                    label: 'Tekirdağ',
                    value: 'Tekirdağ',
                },
                {
                    label: 'İzmit',
                    value: 'İzmit',
                },

            ]
        };
        this.state1 = {
            selected: undefined
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    onValueChange1(value: string) {
        this.setState({
            selected: value
        });
    }

    onZoneSelected = () => {

        this.setState(
            {
                zone_id: this.state.zone_id,
            },

        )};
    onCitySelected = () => {

        this.setState(
            {
                city_id: this.state.city_id,
            },

        )};

    render() {
        return (
                <ScrollView style={styles.root}>

                    <View style={{}}>
                        <Image
                            source={require('../../assets/filter.png')}
                            style={{height:95,width:220,marginTop:20,marginBottom:40}}
                            resizeMode={'stretch'}
                        />
                    </View>

                    <View style={{padding:15,paddingRight:30,paddingLeft:30}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Bölge Seçiniz',
                                value: null,
                                color: 'red',
                            }}
                            items={this.state.zones}
                            onValueChange={value => {
                                this.setState({
                                    zone_id: value,
                                });
                            }}
                            value={this.state.zone_id}
                            style={{ ...pickerSelectStyles }}
                            onDonePress={() => {
                                this.onZoneSelected()
                            }}
                        />
                    </View>

                    <View style={{paddingTop:15,paddingRight:30,paddingLeft:30}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Şehir Seçiniz',
                                value: null,
                                color: 'red',
                            }}
                            items={this.state.cities}
                            onValueChange={value => {
                                this.setState({
                                    city_id: value,
                                });
                            }}
                            value={this.state.city_id}
                            style={{ ...pickerSelectStyles }}
                            onDonePress={() => {
                                this.onZoneSelected()
                            }}
                        />
                    </View>


                    <View style={{paddingTop:30}}>

                        <CheckBox
                            containerStyle={{backgroundColor:'white'}}
                            title='3 Yıldızlı İşletme'
                            color={"rgba(193,27,47,1)"}
                            checkedColor='rgba(193,27,47,1)'
                            uncheckedColor='rgba(193,27,47,1)'
                            checkedIcon='square'
                            checked={this.state.checkedStar1}
                            onPress={() => this.setState({checkedStar1: !this.state.checkedStar1})}

                        />

                        <CheckBox
                            containerStyle={{backgroundColor:'white'}}
                            title='2 Yıldızlı İşletme'
                            color={"rgba(193,27,47,1)"}
                            checkedColor='rgba(193,27,47,1)'
                            uncheckedColor='rgba(193,27,47,1)'
                            checkedIcon='square'
                            checked={this.state.checkedStar2}
                            onPress={() => this.setState({checkedStar2: !this.state.checkedStar2})}

                        />

                        <CheckBox
                            containerStyle={{backgroundColor:'white'}}
                            title='1 Yıldızlı İşletme'
                            color={"rgba(193,27,47,1)"}
                            checkedColor='rgba(193,27,47,1)'
                            uncheckedColor='rgba(193,27,47,1)'
                            checkedIcon='square'
                            checked={this.state.checkedStar3}
                            onPress={() => this.setState({checkedStar3: !this.state.checkedStar3})}

                        />

                        <View >
                            <CheckBox
                                containerStyle={{backgroundColor:'white'}}
                                title='Lezzet Noktası'
                                color={"rgba(193,27,47,1)"}
                                checkedColor='rgba(193,27,47,1)'
                                uncheckedColor='rgba(193,27,47,1)'
                                checkedIcon='square'
                                checked={this.state.flavorPoint}
                                onPress={() => this.setState({flavorPoint: !this.state.flavorPoint})}

                            />
                        </View>



                    </View>

                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity
                            style={{backgroundColor:'rgba(193,27,47,1)',marginVertical:10,borderRadius:10,paddingVertical:16,width:'80%'}}
                            onPress={() => {
                                this.props.navigation.push("FilterResult");
                            }}
                        >
                            <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Filtrele</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1
    },
    loginBtn: {
        position: "absolute",
        top: "75.41%",
        left: "31.73%",
        height: "6.00%",
        width: "36.53%"
    },
    button: {
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
    filtrele: {
        position: "absolute",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        fontFamily: "Helvetica"
    },
    loginBg: {
        position: "absolute",
        top: "0.00%",
        left: "0.00%",
        height: "100.75%",
        width: "100.80%",
        backgroundColor: "transparent"
    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: "rgba(193,27,47,1)",
        borderRadius: 4,
        backgroundColor: "rgba(193,27,47,1)",
        color: "white"
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'rgba(193,27,47,1)',
        borderRadius: 8,
        color: 'rgba(193,27,47,1)',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});