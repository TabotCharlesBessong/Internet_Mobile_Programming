
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from 'react-native';
import { TabOneScreen } from '../screens';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings",
};

const Settings = () => (
	<View>
		<Text>Settings</Text>
	</View>
);
const Map = () => (
	<View>
		<Text>Map</Text>
	</View>
);

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

const AppNavigator = () => {
  return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={createScreenOptions}
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "gray",
				}}
			>
				<Tab.Screen name="Restaurants" component={TabOneScreen} />
				<Tab.Screen name="Map" component={Map} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator