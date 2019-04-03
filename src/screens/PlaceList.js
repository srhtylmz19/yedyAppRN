import React, {Component} from "react";
import {Image, Platform, Linking , StyleSheet, Text,ImageBackground, TouchableOpacity, ScrollView, View, Dimensions,Modal,Alert} from "react-native";
import Slideshow from 'react-native-slideshow';
const screen_width = Dimensions.get('window').width;

export default class PlaceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region_name:null,
            city_name:null,
            current_restaurant_id:null,
            url:null,
            restaurant_street:null,
            addressLine:null,
            restaurant_district:null,
            restaurant_city:null,
            restaurant_phone:null,
            restaurant_title:null,
            openingTime:null,
            closingTime:null,
            modalVisible:false,
            modalImage:null,
            city_id:null,
            zone_id:null,
            value:null,
            location_longitude:null,
            location_latitude:null,
            restaurant_id:null,
            list :[
                { url:'https://facebook.github.io/react-native/docs/assets/favicon.png'},
                { url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },
            ],
            restaurant_informations : [
                {
                    restaurant_id:1,
                    url:'https://facebook.github.io/react-native/docs/assets/favicon.png',
                    restaurant_street: 'MahmutBey Mahallesi',
                    addressLine: 'Peyami Safa Cd. 38/D, 34218',
                    restaurant_district:'Bağcılar',
                    restaurant_city:'İstanbul',
                    openingTime:'10.00',
                    closingTime:'24.00',
                    restaurant_phone:'5423861735'
                },

            ]
        };
    }

    componentWillMount()
    {
        const city_id=this.props.navigation.getParam('city_id','1');
        const zone_id=this.props.navigation.getParam('zone_id','1');
        const value=this.props.navigation.getParam('value','1');

        this.setState({
            city_id:city_id,
            zone_id:zone_id,
            value:value,
        })

    }
    componentDidMount() {

        this.selectedResult()

    }

    selectedResult()
    {
        var zone_id = this.state.zone_id;
        var city_id = this.state.city_id;
        var star_value = this.state.value;
        fetch('https://yedy.karakis.me/api/v1/places/'+zone_id+'/'+city_id+'/'+star_value+'', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    city_name:responseJson.cityName,
                    region_name:responseJson.regionName,

                    list:responseJson.list,
                    restaurant_informations:responseJson.restaurant_informations,

                });
                this.sliderPositionChanged(0);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {

        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>

                        <View>
                            <Text adjustsFontSizeToFit={true}
                                  numberOfLines={1}
                                  style={styles.headerTitle}>{this.state.region_name},
                            </Text>
                            <Text adjustsFontSizeToFit={true}
                                  numberOfLines={1}
                                  style={styles.headerTitle}>
                                {this.state.city_name}</Text>
                        </View>
                        <View>
                           <Image
                               source={require('../../assets/yeniyilzdiz.jpeg')}
                               style={styles.pageIcon}
                           />
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>

                <View style={{paddingLeft:15}}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.title}>{this.state.restaurant_title}</Text>
                        <Image
                            source={require('../assets/line.png')}
                            style={styles.lineImage}
                        />

                    </View>

                    <View style={{paddingRight:15}}>




                        <Slideshow
                            height={320}
                            dataSource={this.state.list}
                            indicatorSize={10}
                            indicatorSelectedColor={'black'}
                            indicatorColor={'gray'}
                            onPositionChanged={(index)=>{
                                this.sliderPositionChanged(index);
                            }}
                            onPress={(value)=>{
                                this.onSliderTapped(value);
                            }}
                            onScrollEndDrag={(index)=>{
                                this.onScrollCustom
                            }}
                            pagingEnabled={true}
                            scrollEnabled={true}
                            onMomentumScrollEnd={()=>{
                                this.onScrollCustom
                            }}
                        />
                    </View>

                    <View style={{paddingTop:30}}>

                            <Text>{this.state.restaurant_street},</Text>
                            <Text>{this.state.addressLine}</Text>

                            <View style={styles.rowInformation}>
                                <Text >{this.state.restaurant_district}/{this.state.restaurant_city}</Text>
                                <TouchableOpacity style={styles.addressInformation} onPress={()=>this.navigateToMap()}>
                                    <Text style={{fontWeight:'bold',paddingLeft:5,paddingRight:5,color:'white'}}>Yol Tarifi</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.times}>
                                <View style={styles.rowGeneral}>
                                    <Text>Açılış Saati </Text>
                                    <Text>:{this.state.openingTime}</Text>
                                </View>
                                <View style={styles.rowGeneral}>
                                    <Text>Kapanış Saati </Text>
                                    <Text>:{this.state.closingTime}</Text>
                                </View>
                            </View>


                            <TouchableOpacity style={[styles.rowInformation]}>
                                <Text >{this.state.restaurant_phone}</Text>
                                <TouchableOpacity style={styles.callButton} onPress={()=>{
                                    Linking.openURL(`tel:${this.state.restaurant_phone}`)

                                }}>
                                    <Text style={styles.callText}>Ara</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>

                    </View>

                </View>
                            <TouchableOpacity
                                onPress={()=>this.goToPlaceDetail()}
                                style={styles.detailButton}>
                                <Text style={styles.detailText}>   İNCELE   </Text>
                            </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={()=>{}} >

                    <View style={{flex:1}} >

                        <Image source={{uri:this.state.modalImage}} style={{width: '100%', height: '100%'}}
                               resizeMode={'stretch'}>
                        </Image>

                        <TouchableOpacity style={{position:'absolute',right:30,top:30}}
                            onPress={()=>{
                                this.setModalVisibility(false)
                            }}
                        >
                            <Image
                                source={require('../../assets/close_icon.png')}
                                style={{width:30,height:30}}
                            />
                        </TouchableOpacity>
                    </View>


                    
                </Modal>
            </View>
        );
    }
    setModalVisibility(bool)
    {
        this.setState({
            modalVisible:bool
        })
    }
    onSliderTapped(value)
    {
        this.setState({modalImage:value.image.url});
        this.setModalVisibility(true)
    }
    sliderPositionChanged(index)
    {
        this.setState({
            restaurant_title:this.state.restaurant_informations[index].restaurant_title,
            restaurant_id:this.state.restaurant_informations[index].restaurant_id,
            restaurant_phone:this.state.restaurant_informations[index].restaurant_phone,
            openingTime:this.state.restaurant_informations[index].openingTime,
            closingTime:this.state.restaurant_informations[index].closingTime,
            addressLine:this.state.restaurant_informations[index].addressLine,
            restaurant_district:this.state.restaurant_informations[index].restaurant_district,
            restaurant_city:this.state.restaurant_informations[index].restaurant_city,
            restaurant_street:this.state.restaurant_informations[index].restaurant_street,
            location_latitude:this.state.restaurant_informations[index].location_latitude,
            location_longitude:this.state.restaurant_informations[index].location_longitude,

        })
    }
    onScrollCustom = (e) =>{
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        console.log('New page ', pageNum);
        this.setState({position: pageNum});
    }

    goToPlaceDetail()
    {
        console.log(this.state.restaurant_id)
        this.props.navigation.navigate('PlaceDetail',{
            restaurant_id:this.state.restaurant_id
        })
    }

    navigateToMap()
    {


        var lat = this.state.location_latitude;
        var long = this.state.location_longitude;

        if (lat == null || lat == '' || long == null || long == '')
        {
            Alert.alert('Konum bilgisine şuan ulaşılamıyor. Lütfen daha sonra deneyiniz')
            return;
        }else {

            var url = Platform.select({
                ios: 'http://maps.apple.com/?ll='+this.state.location_latitude+','+this.state.location_latitude,
                android: 'geo:'+this.state.location_latitude+','+this.state.location_longitude
            });

            Linking.canOpenURL(url).then(supported => {
                if (supported) {
                    return Linking.openURL(url);
                } else {
                    Alert.alert('Konum bilgisine şuan ulaşılamıyor. Lütfen daha sonra deneyiniz')
                    return;
                }
            });
        }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        paddingTop:10
    },
    headerTitle:{
        textAlignVertical: "center",
        top: 25,
        left: 10,
        fontSize: 17
    },
    pageIcon:{
        height:50,
        width:50,
        marginTop:20
    },
    separator:{
        borderBottomColor: 'rgba(193,27,47,1)',
        borderBottomWidth: 1,
    },
    containerHeader:{
        paddingRight:30,
        paddingTop:15,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        color:'rgba(193,27,47,1)',
        fontWeight:'900',
        fontSize:20,
        paddingTop:2
    },
    lineImage:{
        height:30,
        width:30
    },
    rowInformation:{
        flexDirection:'row',
        width:250
    },
    addressInformation:{
        backgroundColor:'rgba(193,27,47,1)',
        left:150,
        position:'absolute'
    },
    times:{
        marginTop:10,
        width:screen_width/2
    },
    rowGeneral:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    callButton:{
        backgroundColor:'rgba(193,27,47,1)',
        left:150,
        position:'absolute'
    },
    callText:{
        fontWeight:'bold',
        paddingLeft:5,
        paddingRight:5,
        color:'white'
    },
    detailButton:{
        position:'absolute',
        right:30,
        bottom:30,
        backgroundColor:'rgba(193,27,47,1)'
    },
    detailText:{
        fontWeight:'bold',
        color:'white',
        paddingRight:10,
        paddingLeft:10
    }
});
