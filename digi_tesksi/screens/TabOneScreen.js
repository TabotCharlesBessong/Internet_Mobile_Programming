import { StyleSheet, Text, View} from "react-native";


export default function TabOneScreen() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Tab One of our APP</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
        width="100"
        height="100"
        backgroundColor="orange"
      />
      <Text style={styles.title}>Tab One of our APP</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "relative",
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 100,
    width: "80%",
  },
});
