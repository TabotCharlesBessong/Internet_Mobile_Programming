// // Learn more about createBottomTabNavigator:
// // https://reactnavigation.org/docs/bottom-tab-navigator
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import {LoginScreen,TabOneScreen,TabTwoScreen,GetStartedScreen} from '../screens'

// // You can explore the built-in icon families and icons on the web at:
// // https://icons.expo.fyi/
// function TabBarIcon(props) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// // Each tab has its own navigation stack, you can read more about this pattern here:
// // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

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

const LoginNavigator = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: "Login Into your account" }}
      />
    </TabTwoStack.Navigator>
  );
}

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
