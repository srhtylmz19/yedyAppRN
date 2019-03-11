import React, {Component} from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image, ScrollView, Dimensions} from "react-native";
import {Container} from 'native-base';
const screen_width = Dimensions.get('window').width;

export default class PlaceDetail extends Component {
    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:'white'}}>


                <View style={{paddingLeft:20,marginTop:40}}>
                    <Text style={{
                        fontSize:20,
                        color:'rgba(193,27,47,1)',
                        fontWeight:'700'
                    }}>SERAF</Text>
                </View>

                <View
                    style={{
                        borderBottomColor: 'rgba(193,27,47,1)',
                        borderBottomWidth: 1
                        ,marginBottom:10
                    }}
                />

                <View style={{paddingLeft:20,paddingRight:20,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require("../assets/seraf.jpg")}
                           style={{height: 350, width: 350}}
                            resizeMode={'stretch'}/>
                </View>

                <View style={{padding:10}}>


                    <Text
                        numberOfLines={0}
                        style={{
                            textAlignVertical: "center",
                            fontSize: 13,
                            flex: 1,  //width (according to its parent)
                            flexDirection: 'column',    //its children will be in a column
                        }}>
                        İstanbul'da Ezberleri Bozan Yeni Bir Mekan: {"\n"}

                        <Text style={{fontWeight:'900',fontSize:20}}>SERAF RESTAURANT</Text>{"\n"}{"\n"}{"\n"}

                        Anadolu'nun en özel yemeklerini, şık ve nezih mekanında sunan Seraf, İstanbul'a yeni bir soluk getirdi.
                        Gaziantep'in Beyran çorbasından Mardin'in kaburga dolmasına, Şanlıurfa'nın bostane
                        salatasından Sivas'ın hurma tatlısına kadar pek çok özel Anadolu lezzeti Seraf
                        Restaurant'ta İstanbullular'la buluşuyor. {"\n"}{"\n"}



                    </Text>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Image source={require("../../assets/bg2.jpeg")}
                               style={{height: screen_width/2 - 15, width: screen_width/2 - 15}}/>
                        <Image source={require("../../assets/bg2.jpeg")}
                               style={{height: screen_width/2 - 15, width: screen_width/2 - 15}}/>
                    </View>


                    <Text  numberOfLines={0}
                           style={{
                               textAlignVertical: "center",
                               fontSize: 13,
                               marginTop:30,
                           }}>
                        Seraf, Anadolu'nun gerçek lezzetini yakalamak adına yemek için gerekli tüm
                        malzemeleri yöresinden getiriyor. Doğal ortamda beslenen hayvanlardan usulüne uygun
                        kesilmiş etleri ve mevsimine uygun olarak hasat edilen ürünleri getiren Seraf, usta
                        şeflerin ellerinde şekillenen yemekleri şık bir ortamda misafirlerine sunuyor.

                        {"\n"}{"\n"}
                        <Text>

                            Nar, zeytin, mandalina ağaçlarının bulunduğu mekanda özel yemek odaları, çocuk odalarının
                            yanı sıra alt katında yöresel ürünlerin satıldığı Seraf Gurme Dükkan ile de dikkat
                            çekiyor. Seraf Gurme Dükkan'da kasap, doğal lezzetler, organik lezzetler ve tatlı reyonunda
                            bulunan her bir ürün anayurdundan getirilerek satışa sunuluyor.
                            Anadolu'nun kadim kültüründen gelen özünü yaşatmak için yola çıkan Seraf Restaurant,
                            iş dünyasının göbeği Mahmutbey'de taze, doğal ürünleri ve ağaçlarının yarattığı özel
                            ambiyansı ile misafirlerini ağırlıyor.

                        </Text>
                    </Text>

                    <View style={{marginTop:40}}>
                        <Text style={{
                            fontSize:18
                        }}>ŞEFİN CV'Si</Text>
                        <Text style={{
                            color: "rgba(193,27,47,1)",
                            fontWeight: 'bold',
                            fontSize:25
                        }}>
                            Mustafa ÖZTÜRK
                        </Text>
                    </View>

                    <Image source={require("../../assets/chef.jpeg")}
                           style={{
                               height: 250,
                               width: screen_width-50,
                           }}
                    resizeMode={'stretch'}/>

                    <Text  style={{
                        textAlignVertical: "center",
                        fontSize: 13,
                        marginTop:25
                    }}>
                        Seraf restaurant şeflerinden Mustafa Öztürk, 1983 yılı Kayseri doğumludur. Afyon
                        Kocatepe Üniversitesi'ne devam ederken Grand Özel Hotel Afyon da iş hayatına başlamıştır.
                        Fan Fang Chinese Restaurant, Boğaziçi Borsa Restaurant,
                        Cercis Murat Konağı gibi Anadolu mutfağında söz sahibi restaurantlarda çalışmıştır.
                        Lübnan, Tunus, Suriye gibi ülkelerde araştırmalar yapmış olup, kuruluşundan bu yana Seraf
                        bünyesinde hizmet vermektedir.
                    </Text>

                </View>

                <View style={{flexDirection: 'row'}}>


                    <Text
                        numberOfLines={100}
                        style={{
                            textAlignVertical: "center",
                            top: 10,
                            left: 10,
                            right: 10,
                            fontSize: 15,
                            flex: 1,  //width (according to its parent)
                            flexDirection: 'column',    //its children will be in a column
                            alignItems: 'center', //align items according to this parent (like setting self align on each item)
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginLeft: 25,
                            marginRight: 10,
                        }}>
                    </Text>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        flex:1,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
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
