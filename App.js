import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <view></view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 0.25,
    flexDirection: "row",
    backgroundColor: "#fff",
    gap: 25,
    //alignItems: "center",
    // justifyContent: "center",
  },
});
