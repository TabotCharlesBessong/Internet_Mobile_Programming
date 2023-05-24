import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './navigation';
// import AppNavigator from './navigation/AppNavigator';
import { Text, useColorScheme } from 'react-native';

const App = () => {
  const colorScheme = useColorScheme()
  return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        {/* <AppNavigator/> */}
        <Text>Hello world</Text>
        <StatusBar />
      </SafeAreaProvider>
    );
}

export default App