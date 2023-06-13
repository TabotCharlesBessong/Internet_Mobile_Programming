
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc'

const ValidationScreen = ({ navigation }) => {
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
      <Text style={styles.textHeader} >
        welcome back to digitekisi
      </Text>
      <View style={styles.form}>
        <View style={styles.input_field} >
          <TextInput
            placeholder="verification code*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <Icon style={[tw`p-2 bg-transparent rounded-full w-10`]} color="black" name="stepforward" type="antdesign" />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.alt} >
        <Text style={styles.altText1} >go back to login</Text>
        <Text style={styles.altText2} >create new account</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFA5',
    width:'100%',
    height:'90%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'relative'
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: '20px',
  },
  form: {
    width: 300,
    margin: 20,
    borderRadius: '10px',
    backgroundColor: 'transparent',
    height:'40%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'1rem'
  },
  input_field:{
    padding:'4px 8px',
    position:'relative',
    margin:'1rem auto',
    backgroundColor:'transparent',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    border:'2px solid black',
    borderRadius:'6px',
    width:'100%'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width:'100%',
    outline:'none',
    border:'none'
  },
  input_icon:{
    position:'absolute',
    top:'2px',
    right:'2px'
  },
  submitButton: {
    width: 100,
    height: 40,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '10px',
    alignSelf: 'center',
    marginTop: '20px',
    // padding:'0.4rem 1rem',
    paddingBottom:'5px',
    paddingTop:'5px',
    paddingLeft:'16px',
    paddingLeft:'16px',
    backgroundColor:'#ffd600'
  },
  submitButtonText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color:'#fff'
  },
  error: {
    color: '#f00',
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '10px',
  },
  textHeader:{
    fontSize:'3.2rem',
    fontWeight:'700',
    color:'#ffd600',
    textTransform:'capitalize',
    textAlign:'center'
  },
  alt:{
    position:'absolute',
    bottom:'1.5rem',
    // textAlign:'center',
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  altText1:{
    color:'#fff',
    marginRight:'4.2rem'
  },
  altText2:{
    color:'#ffd600',
    marginLeft:'4.2rem'
  }
});

export default ValidationScreen;