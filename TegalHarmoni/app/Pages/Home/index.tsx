import { iklan } from "@/app/Inventory";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";

const Home = () => {
   const [data, setData] = useState<
          {
              id: number;
              nama: string;
              deskripsi: string;
              img: string;
              maps: string;
          }[]
      >([]);
       const fetchData = async () => {
           const response = await fetch("http://192.168.130.220:5000/hotel");
           const data = await response.json();

           // setData = mengisi state data dari fetching
           setData(data);
       };

       useEffect(() => {
        fetchData()
       }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
          <Text>Home</Text>
            <View style={styles.containerContent}>
                <Text style={styles.head1}>Penawaran Weekend</Text>
                <ImageBackground
                    source={iklan}
                    style={styles.iklanImg}></ImageBackground>

                
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    head1: {
        fontSize: 20,
        fontWeight: "800",
        padding: 5,
        textDecorationLine: "underline",
    },
    iklanImg: {
        height: 200,
    },
    containerContent: {},
});
