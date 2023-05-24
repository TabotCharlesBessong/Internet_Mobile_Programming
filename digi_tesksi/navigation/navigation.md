
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

<!-- import React, { useState } from 'react';
import { Svg } from 'react-native-svg';

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Svg src="path/to/svg/file" />
    </View>
  );
};

export default App; -->

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { tailwind } from 'tailwindcss';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // TODO: Submit the login form
  };

  return (
    <View bg-gray-100>
      <View px-4 py-4 border border-gray-300 rounded-md>
        <Text font-bold text-xl text-gray-900>Login</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChange={setUsername}
          style={tw`w-full mt-4 border-gray-300 rounded-md`}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
          style={tw`w-full mt-4 border-gray-300 rounded-md`}
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={handleSubmit}
          style={tw`w-full mt-4 bg-blue-500 text-white rounded-md`}
        />
      </View>
    </View>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // TODO: Submit the login form
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChange={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginForm: {
    width: 300,
    margin: 100,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    width: 100%,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },v
  button: {
    width: 100%,
    height: 40,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default LoginPage;


import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setError('');

    // TODO: Submit the form data to your backend server.

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <TextInput
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  form: {
    width: 300,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    width: 100,
    height: 40,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: '#f00',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignupScreen;

import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setError('');

    // TODO: Submit the email address to your backend server to send a password reset link.

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Send Password Reset Link</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  form: {
    width: 300,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    width: 100,
    height: 40,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: '#f00',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ForgotPasswordScreen;

<Icon name="ios-home" size={20} color="red" type="filled" />