import React, {Component} from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image, ScrollView, Dimensions,ActivityIndicator} from "react-native";
import {Container} from 'native-base';
const screen_width = Dimensions.get('window').width;

export default class PlaceDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant_name:null,
            restaurant_main_image:null,
            restaurant_id:null,
            restaurant_motto:null,
            restaurant_header_description:null,
            restaurant_horizontal_image1:null,
            restaurant_horizontal_image2:null,
            restaurant_center_description:null,
            restaurant_chef_name:null,
            restaurant_chef_image:null,
            restaurant_footer_description:null,
            next_id:null,

        };
    }

    componentWillMount()
    {
        const restaurant_id=this.props.navigation.getParam('restaurant_id','1');
        this.setState({
            restaurant_id:restaurant_id,
        })

    }
    componentDidMount() {

      this.getRestaurantDetail(this.state.restaurant_id)

    }

    getRestaurantDetail(restaurant_id)
    {

        fetch('https://yedy.karakis.me/api/v1/place/'+restaurant_id, {
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
                    restaurant_name:responseJson.restaurant_name,
                    restaurant_main_image:responseJson.restaurant_main_image,
                    restaurant_id:responseJson.restaurant_id,
                    restaurant_motto:responseJson.restaurant_motto,
                    restaurant_header_description:responseJson.restaurant_header_description,
                    restaurant_horizontal_image1:responseJson.restaurant_horizontal_image1,
                    restaurant_horizontal_image2:responseJson.restaurant_horizontal_image2,
                    restaurant_center_description:responseJson.restaurant_center_description,
                    restaurant_chef_name:responseJson.restaurant_chef_name,
                    restaurant_chef_image:responseJson.restaurant_chef_image,
                    restaurant_footer_description:responseJson.restaurant_footer_description,
                    next_id:responseJson.next_id
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            this.state.restaurant_main_image != null ?
                <ScrollView
                    style={{flex:1,backgroundColor:'white'}}
                    ref='_scrollView'>


                    <View style={{paddingLeft:20,marginTop:40}}>
                        <Text style={{
                            fontSize:20,
                            color:'rgba(193,27,47,1)',
                            fontWeight:'700'
                        }}>{this.state.restaurant_name}</Text>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'rgba(193,27,47,1)',
                            borderBottomWidth: 1
                            ,marginBottom:10
                        }}
                    />

                    {this.state.restaurant_main_image != null ?
                        <View style={{paddingLeft:20,paddingRight:20,alignItems:'center',justifyContent:'center'}}>
                            <Image source={{uri:this.state.restaurant_main_image}}
                                   style={{height: 350, width: 350}}
                                   resizeMode={'contain'}/>
                        </View>
                        :null}

                    <View style={{padding:10}}>


                        <Text
                            numberOfLines={0}
                            style={{
                                textAlignVertical: "center",
                                fontSize: 13,
                                flex: 1,  //width (according to its parent)
                                flexDirection: 'column',    //its children will be in a column
                            }}>
                            {this.state.restaurant_motto} {"\n"}

                            <Text style={{fontWeight:'900',fontSize:20}}>{this.state.restaurant_name}</Text>{"\n"}{"\n"}{"\n"}

                            {this.state.restaurant_header_description} {"\n"}{"\n"}



                        </Text>

                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            {this.state.restaurant_horizontal_image1 != null ?
                                <Image source={{uri:this.state.restaurant_horizontal_image1}}
                                       style={{height: screen_width/2 - 15, width: screen_width/2 - 15}}/>
                                : null}

                            {this.state.restaurant_horizontal_image2 != null ?
                                <Image source={{uri:this.state.restaurant_horizontal_image2}}
                                       style={{height: screen_width/2 - 15, width: screen_width/2 - 15}}/>
                                : null}
                        </View>


                        <Text  numberOfLines={0}
                               style={{
                                   textAlignVertical: "center",
                                   fontSize: 13,
                                   marginTop:30,
                               }}>

                            {this.state.restaurant_center_description}

                            {"\n"}{"\n"}

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
                                {this.state.restaurant_chef_name}
                            </Text>
                        </View>
                        {this.state.restaurant_chef_image != null ?
                            <Image source={{uri:this.state.restaurant_chef_image}}
                                   style={{
                                       height: 250,
                                       width: screen_width-50,
                                   }}
                                   resizeMode={'stretch'}/>
                            : null}


                        <Text  style={{
                            textAlignVertical: "center",
                            fontSize: 13,
                            marginTop:25
                        }}>
                            {this.state.restaurant_footer_description}
                        </Text>

                        <View
                            style={{
                                borderBottomColor: 'rgba(193,27,47,1)',
                                borderBottomWidth: 1,
                                marginTop:20,
                                marginBottom:40
                            }}
                        />
                    </View>

                    <View style={{backgroundColor:'rgba(193,27,47,1)',position:'absolute',right:20,bottom:10,marginBottom:15}}>
                        <TouchableOpacity onPress={()=>{
                            this.refs._scrollView.scrollTo({ y: 0, animated: true });
                            this.getNextRestaurant()
                        }}>
                            <Text style={{fontWeight:'700',color:'white',textAlign:'center'}}> SONRAKİ </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                :
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator/>
                </View>

        );
    }
    getNextRestaurant()
    {
        if (this.state.next_id == null && this.state.next_id == '')
        {
            return
        }
        this.getRestaurantDetail(this.state.next_id);

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
