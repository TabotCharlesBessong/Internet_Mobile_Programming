// // Learn more about createBottomTabNavigator:
// // https://reactnavigation.org/docs/bottom-tab-navigator
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { useColorScheme } from "react-native";

// import Colors from "../constants/Colors";
// import {LoginScreen,TabOneScreen,TabTwoScreen} from '../screens'

// const BottomTab = createBottomTabNavigator();

// export default function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
//     >
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneNavigator}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="ios-code" color={color} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoNavigator}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="ios-code" color={color} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Login"
//         component={LoginNavigator}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="ios-code" color={color} />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// // You can explore the built-in icon families and icons on the web at:
// // https://icons.expo.fyi/
// function TabBarIcon(props) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// // Each tab has its own navigation stack, you can read more about this pattern here:
// // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator();

// const TabOneNavigator = ()=> {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="TabOneScreen"
//         component={TabOneScreen}
//         options={{ headerTitle: "Tab One Title" }}
//       />
//     </TabOneStack.Navigator>
//   );
// }

// const LoginStack = createStackNavigator()

// const LoginNavigator = () => {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{ headerTitle: "Login Into your account" }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }

// const TabTwoStack = createStackNavigator();

// const TabTwoNavigator = () => {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ headerTitle: "Tab Two Title" }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LoginScreen,SignupScreen} from '../screens'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SignupScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
