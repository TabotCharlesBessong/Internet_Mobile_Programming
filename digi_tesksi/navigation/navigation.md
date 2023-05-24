
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const App = () => {
  const [index, setIndex] = useState(0);

  const tabs = [
    {
      title: 'Home',
      screen: HomeScreen,
    },
    {
      title: 'Profile',
      screen: ProfileScreen,
    },
    {
      title: 'Settings',
      screen: SettingsScreen,
    },
  ];

  return (
    <NavigationContainer>
      <BottomTabNavigator
        tabs={tabs}
        index={index}
        onTabPress={setIndex}
      />
    </NavigationContainer>
  );
};

export default App;