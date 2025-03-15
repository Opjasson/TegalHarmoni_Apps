import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const Detail: React.FC<props> = ({ route }) => {
    const sendData = route.params?.data;

    const [data, setData] = useState(sendData);
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
              <Text>
                Navbar
              </Text>
            </View>
            <Text>Halaman Detail</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    navbar: {
      backgroundColor: ''
    },
});

export default Detail;
