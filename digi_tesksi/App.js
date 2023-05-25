import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
// import Navigation from './navigation';
// import AppNavigator from './navigation/AppNavigator';
import { Text, useColorScheme,StyleSheet } from 'react-native';
import { GetStartedScreen, LoginScreen, SignupScreen, ValidationScreen } from './screens';

const App = () => {
  const colorScheme = useColorScheme()
  return (
      <SafeAreaProvider style={styles.container} >
       <LinearGradient
           colors={['#00BFA5', '#333333']}
                    style={{ flex: 1 }}
                    //  Linear Gradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
        >
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <AppNavigator/> */}
        <Text style={{font: '200px', color: 'white'}}>DigiTekisi Our Taxi App</Text>
        {/* <GetStartedScreen/> */}
        {/* <SignupScreen/> */}
        {/* <LoginScreen/> */}
        {/* <ValidationScreen/> */}
        <StatusBar />
        </LinearGradient>
      </SafeAreaProvider>
    );
}

export default App

const styles = StyleSheet.create({
  container:{
    // filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    background: "green",
    // background: 'linear-gradient(180deg, #00BFA5 0%, #333333 100%)',
  }
})