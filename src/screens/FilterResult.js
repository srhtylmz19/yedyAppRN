import React, {Component} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from 'native-base';


export default class FilterResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zone_id: null,
            city_id: null,
            checked_star1: null,
            checked_star2: null,
            checked_star3: null,
            flavor_point: null,
            region_name: null,
            city_name: null,
            star1_count: null,
            star2_count: null,
            star3_count: null,
            flavor_point_count: null,

        };
    }

    componentDidMount() {

        this.getFilterResult()

    }

    componentWillMount() {
        const city_id = this.props.navigation.getParam('city_id', '1');
        const zone_id = this.props.navigation.getParam('zone_id', '1');
        const checked_star1 = this.props.navigation.getParam('checked_star1', '1');
        const checked_star2 = this.props.navigation.getParam('checked_star2', '1');
        const checked_star3 = this.props.navigation.getParam('checked_star3', '1');
        const flavor_point = this.props.navigation.getParam('flavor_point', '1');

        this.setState({
            city_id: city_id,
            zone_id: zone_id,
            checked_star1: checked_star1,
            checked_star2: checked_star2,
            checked_star3: checked_star3,
            flavor_point: flavor_point,
        })

    }

    getFilterResult() {
        fetch('https://yedy.karakis.me/api/v1/getFilterResult', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                zone_id: this.state.zone_id,
                city_id: this.state.city_id,
                checked_star1: this.state.checked_star1,
                checked_star2: this.state.checked_star2,
                checked_star3: this.state.checked_star3,
                flavor_point: this.state.flavor_point
            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                //this.setState({products:responseJson,showingProducts:responseJson})
                this.setState({
                    region_name: responseJson.regionName,
                    city_name: responseJson.cityName,
                    star1_count: responseJson.star1_count,
                    star2_count: responseJson.star2_count,
                    star3_count: responseJson.star3_count,
                    flavor_point_count: responseJson.flavor_point,
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.root}>


                <View style={{}}>
                    <Image
                        source={require('../../assets/filter.png')}
                        style={{height: 95, width: 220, marginBottom: 40, marginTop: 50}}
                        resizeMode={'contain'}
                    />
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'rgba(193,27,47,1)',
                    marginLeft: 70,
                    marginRight: 70
                }}>
                    <Text style={{textAlign: "center", color: "rgba(193,27,47,1)"}}>
                        {this.state.region_name},
                    </Text>
                    <Text style={{
                        textAlign: "center",
                        color: "rgba(193,27,47,1)",
                        fontWeight: '900'
                    }}>{this.state.city_name}</Text>
                </View>

                <Text style={{textAlignVertical: "center", textAlign: "center", marginTop: 10}}>
                    İstemiş olduğunuz sorgu sonucu
                </Text>

                {this.state.star1_count != null ?
                    <TouchableOpacity
                        onPress={() => {
                            this.state.star1_count > 0 ? this.goToPlaceList('star1') : null
                        }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 50,
                            marginRight: 50,
                            marginTop: 30
                        }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: '900',
                            backgroundColor: 'rgba(193,27,47,1)',
                            paddingRight: 10,
                            paddingLeft: 10,
                            paddingTop: 2,
                            paddingBottom: 2
                        }}>
                            {this.state.star1_count} Adet
                        </Text>
                        <Text style={{textAlign: "center", marginTop: 10}}>1 YILDIZLI İŞLETME</Text>
                    </TouchableOpacity>
                    : null}

                {this.state.star2_count != null ?
                    <TouchableOpacity
                        onPress={() => {
                            this.state.star2_count > 0 ? this.goToPlaceList('star2') : null
                        }} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 50,
                        marginRight: 50,
                        marginTop: 30
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: '900',
                            backgroundColor: 'rgba(193,27,47,1)',
                            paddingRight: 10,
                            paddingLeft: 10,
                            paddingTop: 2,
                            paddingBottom: 2
                        }}>
                            {this.state.star2_count} Adet
                        </Text>
                        <Text style={{textAlign: "center", marginTop: 10}}>2 YILDIZLI İŞLETME</Text>
                    </TouchableOpacity>
                    : null}

                {this.state.star3_count != null ?
                    <TouchableOpacity
                        onPress={() => {
                            this.state.star3_count > 0 ? this.goToPlaceList('star3') : null
                        }} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 50,
                        marginRight: 50,
                        marginTop: 30
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: '900',
                            backgroundColor: 'rgba(193,27,47,1)',
                            paddingRight: 10,
                            paddingLeft: 10,
                            paddingTop: 2,
                            paddingBottom: 2
                        }}>
                            {this.state.star3_count} Adet
                        </Text>
                        <Text style={{textAlign: "center", marginTop: 10}}>3 YILDIZLI İŞLETME</Text>
                    </TouchableOpacity>
                    : null}

                {this.state.flavor_point_count != null ?
                    <TouchableOpacity
                        onPress={() => {
                            this.state.flavor_point_count > 0 ? this.goToPlaceList('flavor') : null
                        }} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 50,
                        marginRight: 50,
                        marginTop: 30
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: '900',
                            backgroundColor: 'rgba(193,27,47,1)',
                            paddingRight: 10,
                            paddingLeft: 10,
                            paddingTop: 2,
                            paddingBottom: 2
                        }}>
                            {this.state.flavor_point_count} Adet
                        </Text>
                        <Text style={{textAlign: "center", marginTop: 10}}>LEZZET NOKTASI</Text>
                    </TouchableOpacity>
                    : null}

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 50,
                    marginRight: 50,
                    marginTop: 30
                }}>
                    <Text style={{textAlign: "center",}}>
                        Detaylı İncelemek İstediğiniz
                    </Text>
                    <Text style={{textAlign: "center", fontWeight: 'bold'}}>
                        işletmeler için
                    </Text>
                    <Text style={{textAlign: "center", fontWeight: 'bold'}}>
                        arama sonucundaki
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                            textAlign: "center",
                            fontWeight: 'bold',
                            color: 'rgba(193,27,47,1)',
                            marginRight: 5
                        }}>
                            rakama
                        </Text>
                        <Text style={{textAlign: "center", fontWeight: 'bold'}}>
                            tıklayınız
                        </Text>
                    </View>
                </View>

            </View>
        )
    }

    goToPlaceList(value) {
        this.props.navigation.navigate('PlaceList', {
            zone_id: this.state.zone_id,
            city_id: this.state.city_id,
            value: value
        })
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
