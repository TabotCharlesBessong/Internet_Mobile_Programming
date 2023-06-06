
import { StyleSheet, Text, View,Dropdown } from "react-native";
import React,{useState} from "react";

const MakePaymentScreen = () => {
  const [value, setValue] = useState("");
  return (
    <View>
      <View>
        <Text>pay for your ride</Text>
        <View>
          <View>
            <Text>estimated distance</Text>
            <Text>3.7 KM</Text>
          </View>
          <View>
            <Text>price per km</Text>
            <Text>XAF 100</Text>
          </View>
          <View>
            <Text>cost of ride</Text>
            <Text>XAF 370</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>make payment</Text>
        <Dropdown
          value={value}
          onChange={(item) => setValue(item.value)}
          items={[
            {
              label: "MoMo",
              value: "mtn",
            },
            {
              label: "Orange Money",
              value: "orange",
            },
            {
              label: "Cash",
              value: "cash",
            },
            {
              label: "Bank",
              value: "bank",
            },
          ]}
        />
        <Text>dial *126# to confirm payment</Text>
      </View>

    </View>
  );
};

export default MakePaymentScreen;

const styles = StyleSheet.create({});
