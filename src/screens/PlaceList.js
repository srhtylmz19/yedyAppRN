import React, {Component} from "react";
import {Image, Platform, StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions} from "react-native";
import {Container} from 'native-base';
import Slideshow from 'react-native-slideshow';


const screen_width = Dimensions.get('window').width;
const screen_heigth = Dimensions.get('window').height;

export default class PlaceList extends Component {
    render() {
        const {navigate}=this.props.navigation;

        return (
            <View style={{flex:1,backgroundColor:'white'}}>

                <View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:20,paddingTop:10}}>
                        <View style={styles.headerTexts}>
                            <Text adjustsFontSizeToFit={true}
                                  numberOfLines={1}
                                  style={{
                                      textAlignVertical: "center",
                                      top: 25,
                                      left: 10,
                                      fontSize: 17
                                  }}>Marmara Bölgesi,
                            </Text>
                            <Text adjustsFontSizeToFit={true}
                                  numberOfLines={1}
                                  style={{
                                      textAlignVertical: "center",
                                      top: 28,
                                      left: 10,
                                      fontWeight: 'bold',
                                      fontSize: 17
                                  }}>
                                İstanbul</Text>
                        </View>
                        <View >

                           <Image
                               source={require('../../assets/yeniyilzdiz.jpeg')}
                               style={{height:50,width:50,marginTop:20}}
                           />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'rgba(193,27,47,1)',
                            borderBottomWidth: 1,
                        }}
                    />
                </View>

                <View style={{paddingLeft:15}}>
                    <View style={{paddingRight:30,paddingTop:15,paddingBottom:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'rgba(193,27,47,1)',fontWeight:'900',fontSize:20,paddingTop:2}}>SERAF</Text>
                        <Image
                            source={require('../assets/line.png')}
                            style={{height:30,width:30}}
                        />

                    </View>
                    <View style={{paddingRight:15}}>
                        <Slideshow
                            height={320}
                            dataSource={[
                                { url:'http://placeimg.com/640/480/any' },
                                { url:'http://placeimg.com/640/480/any' },
                                { url:'http://placeimg.com/640/480/any' }
                            ]}/>
                    </View>



                    <View style={{paddingTop:30}}>
                        <Text>Mahmutbey Mahallesi,</Text>
                        <Text>Peyami Safa Cd. 38/D, 34218</Text>

                        <View style={{flexDirection:'row',width:250}}>
                            <Text >Bağcılar/İstanbul</Text>

                            <TouchableOpacity style={{backgroundColor:'rgba(193,27,47,1)',left:150,position:'absolute'}}>
                                <Text style={{fontWeight:'bold',paddingLeft:5,paddingRight:5,color:'white'}}>Yol Tarifi</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop:10,width:screen_width/2}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Açılış Saati </Text>
                                <Text>:10.00</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Kapanış Saati </Text>
                                <Text>:10.00</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row',width:250,marginTop:10}}>
                            <Text >T(0212) 445 55 05</Text>
                            <TouchableOpacity style={{backgroundColor:'rgba(193,27,47,1)',left:150,position:'absolute'}}>
                                <Text style={{fontWeight:'bold',paddingLeft:5,paddingRight:5,color:'white'}}>Ara</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <TouchableOpacity
                    onPress={()=>navigate('PlaceDetail')}
                    style={{position:'absolute',right:30,bottom:30,backgroundColor:'rgba(193,27,47,1)'}}>
                    <Text style={{fontWeight:'bold',color:'white',paddingRight:10,paddingLeft:10}}>   İNCELE   </Text>
                </TouchableOpacity>

            </View>
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
    headerTexts: {}
});
