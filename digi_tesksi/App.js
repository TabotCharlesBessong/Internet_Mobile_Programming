import { StatusBar } from 'expo-status-bar';
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
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <AppNavigator/> */}
        <Text>digitekisi</Text>
        {/* <GetStartedScreen/> */}
        {/* <SignupScreen/> */}
        {/* <LoginScreen/> */}
        <ValidationScreen/>
        <StatusBar />
      </SafeAreaProvider>
    );
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'green'
  }
})