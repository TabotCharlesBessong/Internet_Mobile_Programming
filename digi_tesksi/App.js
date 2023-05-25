import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
// import Navigation from './navigation';
// import AppNavigator from './navigation/AppNavigator';
import { Text, useColorScheme,StyleSheet } from 'react-native';
import { GetStartedScreen, LoginScreen, SignupScreen, ValidationScreen, YouWinScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const App = () => {
  const colorScheme = useColorScheme()
  const Stack = createStackNavigator()
  return (
      <SafeAreaProvider style={styles.container} >
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={SignupScreen} />
           <Stack.Screen name="Login" component={LoginScreen} />
           <Stack.Screen name="Signup" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <YouWinScreen/>
      </SafeAreaProvider>
    );
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'green'
  }
})

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabNavigator from './BottomTabNavigator';
// import SplashScreen from './SplashScreen';
// import LoginScreen from './LoginScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={BottomTabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
