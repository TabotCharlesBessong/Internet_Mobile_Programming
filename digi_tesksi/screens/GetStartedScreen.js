
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SvgUri } from "react-native-svg";
import tw from "tailwind-react-native-classnames";

const GetStartedScreen = () => {
  return (
//      <LinearGradient
//            colors={['#00BFA5', '#333333']}
//                     style={{ flex: 1 }}
//                     //  Linear Gradient 
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 0, y: 1 }}
//         >
// </LinearGradient>
    <SafeAreaView style={styles.container}>
    <View style={styles.container} >
   
     
    
        <Text style={styles.header} >
          Taxi of your Dreams
        </Text>
        <Text style={styles.title} >
          Your taxi ride could not be more pleasurable than DigiTekisi
        </Text>
      
      
        <Image source={require('../assets/lambo.png')} />
        {/* <SvgUri
    width="100"
    height="200"
     source={require('../assets/lambo.svg')}
  /> */}
        

     

      
        <Text>get started</Text>
     
    </View>
    </SafeAreaView>
  );
};
export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    position: "relative",
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  title: {
    position: "relative",
    marginTop:20,
    fontSize: 20,
    color: "white",
    fontWeight: "normal",
  },
  separator: {
    // marginVertical: 30,
    // height: 100,
    // width: "80%",
    flex: 1,
    alignItems: "center",

  },
});

