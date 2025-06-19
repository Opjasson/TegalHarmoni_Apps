import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Alert,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface props {
    navigation: NavigationProp<any, any>;
}

const FormPromo: React.FC<props> = ({ navigation }) => {
    const [nama, setNama] = useState<string>();
    const [alamat, setAlamat] = useState<string>();
    const [noWhastapp, setNoWhastapp] = useState<string>();

    const handleSend = async () => {
        const nomor = "6285974685033"; // nomor admin
        const pesan = `
**DATA PELANGGAN**
--nama : ${nama}
--alamat : ${alamat}
--noWhatsapp : ${noWhastapp}
`;

        const url = `whatsapp://send?phone=${nomor}&text=${encodeURIComponent(
            pesan
        )}`;

        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("WhatsApp tidak tersedia");
        }
    };

    // const handleSave = async () => {
    //     try {
    //         await fetch("http://192.168.200.220:5000/barang", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 nama: nama,
    //                 harga: harga,
    //                 stok: stok,
    //             }),
    //         });
    //         alert("Barang berhasil ditambahkan!");
    //         navigation.navigate("manage-barang");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <ScrollView>
            <View style={styles.containerForm}>
                <Text style={styles.textLabel}>Nama Barang</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    keyboardType="default"
                    placeholder="Nama lengkap"
                    onChangeText={(text) => setNama(text)}
                />

                <Text style={styles.textLabel}>Harga</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    keyboardType="default"
                    placeholder="Alamat lengkap"
                    onChangeText={(text) => setAlamat(text)}
                />

                <Text style={styles.textLabel}>Stok</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    placeholder="No Whastapp"
                    keyboardType="numeric"
                    onChangeText={(text) => setNoWhastapp(text)}
                />
            </View>
            {/* End Form */}

            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text style={{ color: "white" }}>Kirim</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerForm: {
        paddingHorizontal: 5,
    },
    button: {
        backgroundColor: "#27548A",
        width: 100,
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
        color: "black",
        marginHorizontal: "auto",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    textLabel: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 3,
    },
});

export default FormPromo;
