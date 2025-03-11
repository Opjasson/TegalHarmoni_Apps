import {
    hotelAlexander,
    hotelBahariIn,
    hotelKhas,
    hotelRiez,
} from "@/app/Inventory";
import { NavigationProp } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
    Linking,
} from "react-native";

interface props {
    navigation: NavigationProp<any, any>;
}

const Hotel: React.FC<props> = ({ navigation }) => {
    const [data, setData] = useState<{id: number, nama: string, deskripsi: string, img: string, maps: string}[]>([]);

    const fetchData = async () => {
        const response = await fetch("http://192.168.217.220:5000/hotel");
        const data = await response.json();

        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#1F1F1F"} />
            <View style={styles.banner}>
                <ImageBackground
                    style={styles.bgBanner}
                    source={hotelAlexander}>
                    <View style={styles.judulBan}>
                        <Text style={styles.banText}>HALAMAN HOTEL</Text>
                    </View>
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {Object.values(data).map((item, index) => (
                    <View style={styles.content} key={index}>
                        <Image
                            src={item.img}
                            resizeMode="cover"
                            style={styles.img}
                        />
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.namaHotel}>
                                Hotel {item.nama}
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Detail")}>
                                <Text style={styles.descHotel}>
                                    {item.deskripsi.substring(0, 70)}
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            fontWeight: "400",
                                            color: "blue",
                                        }}>
                                        {" "}
                                        Selengkapnya...
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Linking.openURL(`${item.maps}`)}>
                                <Text>
                                    <Entypo
                                        name="location-pin"
                                        size={18}
                                        color="black"
                                    />
                                    Buka maps
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: 150,
    },
    bgBanner: {
        flex: 1,
    },
    banText: {
        color: "white",
        width: 100,
        textAlign: "center",
    },
    banText2: {
        color: "white",
    },
    judulBan: {
        backgroundColor: "#1F1F1F",
        width: 150,
        height: 60,
        alignItems: "center",
        paddingTop: 4,
    },
    img: {
        height: 150,
        width: 150,
    },
    content: {
        flexDirection: "row",
        marginBottom: 5,
    },
    namaHotel: {
        fontSize: 15,
        fontWeight: "500",
        color: "#a1a199",
        textDecorationLine: 'underline',
        textTransform: 'capitalize'
    },
    descHotel: {
        fontSize: 20,
        fontWeight: "bold",
        width: 265,
    },
});

export default Hotel;
