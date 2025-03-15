import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";


interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const Detail: React.FC<props> = ({ route }) => {
    const sendData = route.params?.data;

    const [data, setData] = useState(sendData);
    return (
        <View style={styles.container}>
            <Image resizeMode="cover" style={styles.img} src={data.img} />
            <View style={styles.isiContent}>
                <Text>{data.nama}</Text>
                <Text style={styles.deskripsi}>{data.deskripsi}</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL(`${data.maps}`)}>
                    <Text>
                        <Entypo name="location-pin" size={18} color="black" />
                        Buka maps
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    img: {
        width: 300,
        height: 300,
    },
    isiContent : {
      borderWidth: 2,
      width: 410,
      padding: 5
    },
    deskripsi: {
      textAlign: 'justify',
      marginTop: 5
    }
});

export default Detail;
