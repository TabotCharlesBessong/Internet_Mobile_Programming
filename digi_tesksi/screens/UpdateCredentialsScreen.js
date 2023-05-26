
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from 'react-native-elements';

const UpdateCredentialsScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
  {
    "label": "Option 1",
    "value": "1"
  },
  {
    "label": "Option 2",
    "value": "2"
  },
  {
    "label": "Option 3",
    "value": "3"
  },
  {
    "label": "Option 4",
    "value": "4"
  },
  {
    "label": "Option 5",
    "value": "5"
  }
]
  return (
    <View>
      <View>
        <Image source={require('../assets/lambo.png')} />
        <Text>neruszaumuy@gmail.com</Text>
      </View>

      <View>
        <View>
          <Text>No of rides</Text>
          <Text>57</Text>
        </View>
        <View>
          <Text>account balance</Text>
          <Text>XAF 2300</Text>
        </View>
        <View>
          <Text>Spare tickets</Text>
          <Text>3</Text>
        </View>
      </View>

      <View>
        <Text>Update Cridentials</Text>
        <View style={styles.input_field} >
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <Icon style={[tw`p-2 bg-transparent rounded-full w-10`]} color="#00BFA5" name="mail" type="entypo" />
        </View>
        <View style={styles.input_field} >
          <TextInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            secureTextEntry={true}
          />
          <Icon style={tw`p-2 bg-transparent rounded-full w-10`} color="#00BFA5" name="eye" type="antdesign" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Select an option</Text>
          <TextInput
            placeholder="Select an option"
            value={selectedOption}
            onChange={(text) => setSelectedOption(text)}
            style={styles.input}
          />
          <View style={styles.options}>
            {options.map((option) => (
              <Text key={option.value} onPress={() => setSelectedOption(option.value)}>
                {option.label}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.input_field} >
          <TextInput
            placeholder="Telephone"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            secureTextEntry={true}
          />
          <Icon style={tw`p-2 bg-transparent rounded-full w-10`} color="#00BFA5" name="phone" type="antdesign" />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateCredentialsScreen;

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
    marginTop: 20,
  },
  form: {
    width: 300,
    margin: 20,
    borderRadius: 10,
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
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    // padding:'0.4rem 1rem',
    paddingBottom:5,
    paddingTop:5,
    paddingLeft:16,
    paddingLeft:16,
    backgroundColor:'#ffd600'
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff'
  },
  error: {
    color: '#f00',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  textHeader:{
    fontSize:'3.2rem',
    fontWeight:'700',
    color:'#ffd600',
    textTransform:'capitalize',
    textAlign:'center'
  },
  card:{
    width:200,
    height:200,
    borderRadius:8
  },
  cardContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'#00BFA5'
  },
  textContainer: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
