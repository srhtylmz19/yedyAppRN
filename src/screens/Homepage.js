import React, {Component} from "react";
import {Center} from "@builderx/utils";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
} from "react-native";
import {
    Content,
    Card,
    CardItem,
    Text,
    DeckSwiper,
    Left,
    Body,
    Right
} from 'native-base';

const cards = [
    {
        name: 'İşletme İsmi 1',
        image: require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png"),
    },
    {
        name: 'İşletme İsmi 2',
        image: require("../assets/venue1.jpg"),
    },
];
export default class Homepage extends Component {
    render() {
        return (
            <View style={styles.root}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 3
                    }}>
                    <View style={{flex: 1}}>
                        <Text style={styles.marmaraBolgesi}>Marmara Bölgesi</Text>
                        <Text style={styles.yeniEklenen}>Yeni Eklenen</Text>
                        <Text style={styles.yildizliIsletmele}>3 Yıldızlı İşletmeler</Text>
                        <Text style={styles.istanbul}>İstanbul</Text>
                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={() => {
                                this.props.navigation.push("Filter");
                            }}
                        >
                            <View style={styles.rectangle2}/>
                            <Center>
                                <Text style={styles.degistir}>Değiştir</Text>
                            </Center>
                        </TouchableOpacity>

                        <View style={{top: 100}}>
                            <DeckSwiper
                                dataSource={cards}
                                renderItem={item =>

                                    <Card>
                                        <CardItem>
                                        </CardItem>

                                        <CardItem cardBody>
                                            <Image style={{height: 300, flex: 1}} source={item.image}/>
                                        </CardItem>
                                        <CardItem>
                                            <Text>{item.name}</Text>
                                        </CardItem>
                                    </Card>

                                }
                            />
                        </View>
                    </View>
                    <Content scrollEnabled={false}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.push("PlaceDetail");
                            }}
                        >
                            <Card>
                                <CardItem cardBody>
                                    <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                           style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Text>3 Yıldız</Text>
                                    </Left>
                                    <Body>
                                    <Text>YEDY İşletme</Text>
                                    </Body>
                                    <Right>
                                        <Text>11s önce</Text>
                                    </Right>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>2 Yıldız</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>1 Yıldız</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Lezzet Noktası</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Lezzet Noktası</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Lezzet Noktası</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Lezzet Noktası</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../assets/0ded1f1ce75ef0f5e0150ad8a51ef1feb2d6800a.png")}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Lezzet Noktası</Text>
                                </Left>
                                <Body>
                                <Text>YEDY İşletme</Text>
                                </Body>
                                <Right>
                                    <Text>11s önce</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 2
    },
    boot: {
        backgroundColor: "white",
        flex: 1,
    },
    scrollViewHomepage: {
        position: "absolute",
    },
    marmaraBolgesi: {
        position: "absolute",
        top: 475,
        left: 13,
        backgroundColor: "transparent",
        color: "rgba(193,27,47,1)",
        fontSize: 24,
        fontFamily: "Helvetica"
    },
    yeniEklenen: {
        position: "absolute",
        top: 32,
        left: 32,
        backgroundColor: "transparent",
        color: "rgba(193,27,47,1)",
        fontSize: 36,
        fontFamily: "Helvetica"
    },
    yildizliIsletmele: {
        position: "absolute",
        top: 75,
        left: 32,
        height: 24,
        width: 209,
        backgroundColor: "transparent",
        color: "rgba(193,27,47,1)",
        fontSize: 20,
        fontFamily: "Helvetica"
    },
    istanbul: {
        position: "absolute",
        top: 505,
        left: 13,
        backgroundColor: "transparent",
        color: "rgba(193,27,47,1)",
        fontSize: 24,
        fontFamily: "Helvetica"
    },
    loginBtn: {
        position: "absolute",
        top: 475,
        left: 230,
        height: 40,
        width: 137
    },
    rectangle2: {
        position: "absolute",
        height: 40,
        width: 137,
        borderWidth: 1,
        borderColor: "rgba(151,151,151,1)",
        borderRadius: 8,
        backgroundColor: "rgba(193,27,47,1)"
    },
    degistir: {
        position: "absolute",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        fontFamily: "Helvetica"
    },
    button: {
        position: "absolute",
        top: 117,
        left: 13,
        height: 265,
        width: 354,
        borderWidth: 1,
        borderColor: "rgba(151,151,151,1)",
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "rgba(216,216,216,1)"
    },
    marmaraBolgesi1: {
        position: "absolute",
        top: 292,
        backgroundColor: "transparent",
        color: "rgba(193,27,47,1)",
        fontSize: 24,
        fontFamily: "Helvetica"
    }
});
