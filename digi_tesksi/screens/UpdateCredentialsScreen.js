
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from 'react-native-elements';
import tw from "twrnc";

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
        <Image style={{
          width:100,height:100,resizeMode:'contain'
        }} source={{
          uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fbeautiful-lady&psig=AOvVaw19Y1psdg7bg4haC811cTqQ&ust=1686661975137000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiW-NTnvf8CFQAAAAAdAAAAABAE'
        }} />
        <Text style={{}} >neruszaumuy@gmail.com</Text>
      </View>

      <View style={styles.cardsContainer} >
        <View style={styles.card} >
          <Text>No of rides</Text>
          <Text>57</Text>
        </View>
        <View style={styles.card} >
          <Text>account balance</Text>
          <Text>XAF 2300</Text>
        </View>
        <View style={styles.card} >
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
            placeholder="Select your cluster"
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
          onPress={{}}
        >
          <Text style={styles.submitButtonText}>Update Cridentials</Text>
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
    padding:8,
    position:'relative',
    margin:'1rem auto',
    backgroundColor:'transparent',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    border:'2px solid black',
    borderRadius:'6px',
    width:'100%',
    marginBottom:'1rem',
    // width:'90%'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width:'100%',
    outline:'none',
    border:'none',
    flex:1
  },
  input_icon:{
    position:'absolute',
    top:'2px',
    right:'2px'
  },
  submitButton: {
    // width: 100,
    // height: 40,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '10px',
    alignSelf: 'center',
    marginTop: '20px',
    padding:'1rem',
    // paddingBottom:5,
    // paddingTop:5,
    // paddingLeft:16,
    // paddingLeft:16,
    backgroundColor:'#ffd600',
  },
  submitButtonText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color:'#fff'
  },
  error: {
    color: '#f00',
    fontSize: 16,
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
  card:{
    width:120,
    height:80,
    borderRadius:'8px',
    backgroundColor:'green',
    color:'gray',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    textTransform:'capitalize',
    cursor:'pointer'
  },
  cardsContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    // backgroundColor:'#00BFA5',
    padding:'1rem'
  },
  textContainer: {
    width: 200,
    height: 40,
    borderRadius: '10px',
    backgroundColor: '#fff',
    margin: 10,
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    // padding: 10,
    borderRadius: '10px',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:'0.5rem',
    paddingBottom:'0.5rem'
  }
});
