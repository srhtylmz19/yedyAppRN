import React, {Component} from "react";
import {View, StyleSheet, Image, TouchableOpacity,ScrollView} from "react-native";
import {Container, Header, Content, Card, CardItem, DeckSwiper, Text, Button, Icon, Left, Body} from 'native-base';


export default class FilterResult extends Component {
    componentDidMount() {

        // Start counting when the page is loaded
       /*

        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.navigate('PlaceList')
        }, 2500);


        */
    }

    render() {
        const {navigate}=this.props.navigation;

        return (
            <View style={styles.root}>


                <View style={{}}>
                    <Image
                        source={require('../../assets/filter.png')}
                        style={{height:95,width:220,marginBottom:40,marginTop:50}}
                        resizeMode={'stretch'}
                    />
                </View>

                <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgba(193,27,47,1)',marginLeft:70,marginRight:70}}>
                    <Text style={{textAlign: "center", color: "rgba(193,27,47,1)"}}>
                        Marmara Bölgesi,
                    </Text>
                    <Text style={{textAlign: "center", color: "rgba(193,27,47,1)",fontWeight:'900'}}>İstanbul</Text>
                </View>

                <Text style={{textAlignVertical: "center", textAlign: "center",marginTop:10}}>
                    İstemiş olduğunuz sorgu sonucu
                </Text>

                <TouchableOpacity
                    onPress={()=>{navigate('PlaceList')}}
                    style={{justifyContent:'center',alignItems:'center',marginLeft:50,marginRight:50,marginTop:30}}>
                    <Text style={{textAlign: "center", color: "white",fontWeight:'900',backgroundColor:'rgba(193,27,47,1)',paddingRight:10,paddingLeft:10,paddingTop:2,paddingBottom:2}}>
                        8 Adet
                    </Text>
                    <Text style={{textAlign: "center",marginTop:10}}>1 YILDIZLI İŞLETME</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{navigate('PlaceList')}}
                    style={{justifyContent:'center',alignItems:'center',marginLeft:50,marginRight:50,marginTop:30}}>
                    <Text style={{textAlign: "center", color: "white",fontWeight:'900',backgroundColor:'rgba(193,27,47,1)',paddingRight:10,paddingLeft:10,paddingTop:2,paddingBottom:2}}>
                        125 Adet
                    </Text>
                    <Text style={{textAlign: "center",marginTop:10}}>LEZZET NOKTASI</Text>
                </TouchableOpacity>

                <View style={{justifyContent:'center',alignItems:'center',marginLeft:50,marginRight:50,marginTop:30}}>
                    <Text style={{textAlign: "center", }}>
                       Detaylı İncelemek İstediğiniz
                    </Text>
                    <Text style={{textAlign: "center", fontWeight:'bold'}}>
                        işletmeler için
                    </Text>
                    <Text style={{textAlign: "center", fontWeight:'bold'}}>
                        arama sonucundaki
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlign: "center", fontWeight:'bold',color:'rgba(193,27,47,1)',marginRight:5}}>
                            rakama
                        </Text>
                        <Text style={{textAlign: "center", fontWeight:'bold'}}>
                             tıklayınız
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1,
    },
    loginBg: {
        position: "absolute",
        top: "0.00%",
        left: "0.00%",
        height: "100.75%",
        width: "100.80%",
        backgroundColor: "transparent"
    }
});
