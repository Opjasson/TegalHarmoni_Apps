import { iklan } from '@/app/Inventory';
import React from 'react'
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native'

const Home = () => {
  return (
      <View style={{ flex: 1, backgroundColor: "#FBFBFB"}}>
        <Text>Penawaran Weekend</Text>
        <View>
          <Image src={iklan} style={styles.iklanImg}/>
        </View>
      </View>
  );
}

export default Home

const styles = StyleSheet.create({
  iklanImg : {

  }
})
