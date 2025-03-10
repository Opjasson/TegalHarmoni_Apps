import React from 'react'
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native'

const Hotel = () => {
  return (
      <ScrollView>
          <StatusBar barStyle={"light-content"} backgroundColor={"#1F1F1F"} />
          <View style={styles.banner}>
              <Text>Hotel</Text>
          </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        backgroundColor: "#1F1F1F",
    },
});

export default Hotel
