
import { DarkTheme, DefaultTheme,NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import {NotFoundScreen} from '../screens'
import LinkingConfiguration from './LinkingConfiguration'
import BottomTabNavigator from "./BottomTabNavigator";

export default function Navigation ({colorScheme}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}