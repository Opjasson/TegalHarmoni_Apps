import {
    hotelAlexander,
    hotelBahariIn,
    hotelKhas,
    hotelRiez,
} from "@/app/Inventory";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
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
  navigation : NavigationProp<any,any>
}

const Hotel: React.FC<props> = ({navigation}) => {
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
                <View style={styles.content}>
                    <Image
                        source={require("../../Inventory/Img/HotelKota/riez.jpg")}
                        style={styles.img}
                    />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={styles.namaHotel}>Hotel Petra</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Detail")}>
                            <Text style={styles.descHotel}>Terletak di </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                Linking.openURL(
                                    "https://maps.app.goo.gl/73cfjZorptfunjKx7"
                                )
                            }>
                            <Text>Buka maps</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        marginBottom: 5
    },
    namaHotel: {
        fontSize: 15,
        fontWeight: "500",
        color: "#a1a199",
    },
    descHotel: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Hotel;
