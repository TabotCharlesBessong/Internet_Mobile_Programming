
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg } from "react-native-svg";
import tw from "tailwind-react-native-classnames";

const GetStartedScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={{
        padding:'2rem'
      }} >
        <Text style={styles.header} >
          taxi of your dreams
        </Text>
      </View>
      <View>
        <Image style={{
          width:100,height:100,resizeMode:'contain'
        }} source={{
          uri:'https://links.papareact.com/gzs'
        }} />

      </View>

      <View>
        <Text>get started</Text>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#00BFA5',
    flex:1
  },
  header:{
    fontSize:'3rem',
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    textTransform:'capitalize',
  }
});
