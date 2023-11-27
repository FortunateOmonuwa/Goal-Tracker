import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./custom/GoalInput";
import Submit from "./custom/SubmitButton";
import Goals from "./custom/Goals";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="enter your goal" />
        <Submit title="submit" />
      </View>
      <View style={styles.goals}>
        <Goals />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,

    backgroundColor: "#fff",

    paddingTop: 50,

    paddingHorizontal: 17,

    //alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingBottom: "3%",
    gap: 10,
    flex: 0,
  },
  goals: {
    flex: 1,
  },
});
