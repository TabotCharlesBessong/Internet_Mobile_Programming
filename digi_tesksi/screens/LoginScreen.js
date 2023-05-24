import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import { OAuth2Client } from 'google-auth-library';

// const client = new OAuth2Client({
//   clientId: 'YOUR_OAUTH2_CLIENT_ID',
//   redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
// });

// GoogleSignin.configure();

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const response = await GoogleSignin.signIn();

  //     const { idToken } = response;
  //     const { payload } = await client.verifyIdToken({
  //       idToken,
  //       audience: 'YOUR_OAUTH2_CLIENT_ID',
  //     });

  //     const { email, name } = payload;

  //     console.log(`User ${name} logged in with Google successfully`);

  //     // Do something with the user's email and login information
  //     // For example, navigate to a new screen or call an API method
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  heading: {
    fontSize: 32,
    marginBottom: 30
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20
  },
  googleButton: {
    marginTop: 20,
    width: 200,
    height: 40
  }
});

export default LoginScreen;