
import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const YouWinScreen = () => {
  return (
    <View style={[tw`flex flex-col items-center justify-around`,styles.constainer]} >
      <View style={styles.header} >
        <Text style={styles.headerText} >
          you tekisi with us, you win!
        </Text>
        <Text style={styles.headerSubtitle} >
          You dont need to find out at bounduma about traffric we pass around
        </Text>
      </View>
      <View>
        <Image style={{
          width:100,height:100,resizeMode:'contain'
        }} source={{
          uri:'https://links.papareact.com/gzs'
        }} />
      </View>
      <View>
        <Text style={{color:'white'}} >
          when others persevere through traffic, you go around it
        </Text>
        <TouchableOpacity
        style={styles.submitButton}
          onPress={{}}
        >
          <Text style={styles.submitButtonText}>skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YouWinScreen;

const styles = StyleSheet.create({
  constainer:{
    backgroundColor:"#00BFA5",
    display:'flex',
    flex:1,
    paddingLeft:'1rem',
    paddingRight:'1rem',
    paddingTop:'2rem',
    paddingBottom:'1rem'
  },
  header:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  headerText:{
    fontSize:'3.2rem',
    color:'#ffffff',
    fontWeight:'bold',
    textTransform:'capitalize',
    textAlign:'center',
    marginBottom:'1.6rem'
  },
  headerSubtitle:{
    fontSize:'1.5rem',
    color:'#ffffff',
    fontWeight:'bold',
    textTransform:'capitalize',
    textAlign:'center'
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
    // paddingBottom:5,
    // paddingTop:5,
    // paddingLeft:16,
    // paddingLeft:16,
    backgroundColor:'transparent',
    border:'1px solid #ffd600'
  },
  submitButtonText: {
    fontSize: '24px',
    // fontWeight: 'bold',
    color:'#ffd600',
    textTransform:'capitalize',
    // letterSpacing:4
  },
});
