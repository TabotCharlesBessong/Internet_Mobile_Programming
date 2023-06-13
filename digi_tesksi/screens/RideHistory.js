
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RideHistory = () => {
  return (
    <View style={styles.container} >
      <Text>Ride History</Text>
      <View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Mar 10, 2022</Text>
            <Text>10:30 AM</Text>
          </View>
          <View>
            <Text>from ublock</Text>
            <Text>to malingo</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideHistory;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    padding:8,
    flex:1
  },
  card:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:4,
    backgroundColor:'#00BFA5',
    fontSize:'20px',
    fontWeight:'bold',
    textTransform:'capitalize',
    marginBottom:'1rem'
  },
  cardSides:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around'
  },
  cardContainer:{
    display:'flex',
    alignItems:'center',
    overflow:'scroll'
  }
});
