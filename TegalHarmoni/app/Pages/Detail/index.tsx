import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
    ScrollView,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const Detail: React.FC<props> = ({ route }) => {
    const sendData = route.params?.data;

    const [data, setData] = useState(sendData);
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.contContent}>
                <Text style={styles.topInfo}>Deskripsi Lengkap</Text>

                <Image resizeMode="cover" style={styles.img} src={data.img} />
                <View style={styles.isiContent}>
                    <Text style={styles.namaHotel}>{data.nama}</Text>
                    <Text style={styles.deskripsi}>{data.deskripsi}</Text>
                    <TouchableOpacity
                        style={styles.maps}
                        onPress={() => Linking.openURL(`${data.maps}`)}>
                        <Entypo name="location-pin" size={18} color="black" />
                        <Text>Buka maps</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topInfo: {
        fontSize: 30,
        fontWeight: "800",
        width: 200,
        paddingHorizontal: 10,
        marginBottom: 7,
    },
    img: {
        width: 300,
        height: 300,
        marginHorizontal: "auto",
        borderRadius: 8,
    },
    isiContent: {
        padding: 11,
    },
    namaHotel: {
        fontSize: 25,
        fontWeight: "800",
        textDecorationLine: "underline",
        textTransform: "uppercase",
    },
    deskripsi: {
        textAlign: "justify",
        marginTop: 5,
    },
    maps: {
        backgroundColor: "#4ca836",
        width: 100,
        borderRadius: 10,
        flexDirection: 'row',
        textAlign: 'center',
        paddingHorizontal: 5
    },
    contContent: {
        backgroundColor: "#e8edea",
        width: 360,
        marginHorizontal: "auto",
        borderRadius: 10,
        marginVertical: 20,
    },
});

export default Detail;
