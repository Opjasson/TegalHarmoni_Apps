import { iklan } from "@/app/Inventory";
import React from "react";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
            <Text style={styles.head1}>Penawaran Weekend</Text>
            <View style={styles.containerContent}>
                <ImageBackground source={iklan} style={styles.iklanImg}>
                </ImageBackground>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
  head1: {
    fontSize: 20,
    fontWeight: "800"
  },
    iklanImg: {
        height: 200,
    },
    containerContent : {

    }
});
