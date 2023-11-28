import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./custom/GoalInput";
import Submit from "./custom/SubmitButton";
import Goals from "./custom/Goals";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);
  const hangleInput = (e) => {
    //console.log(e);
    setInput(e);
  };
  const handleSubmit = () => {
    console.log(input);
    setGoals((prevGoals) => [...prevGoals, input]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="enter your goal"
          onChangeText={hangleInput}
          //value={input}
        />
        <Submit title="submit" onClick={handleSubmit} />
      </View>
      <View style={styles.goals}>
        <Goals goals={goals} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,

    backgroundColor: "#fff",

    paddingTop: 50,

    paddingHorizontal: 17,

    //alignItems: "center",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingBottom: "3%",
    gap: 10,
    flex: 0.3,
  },
  goals: {
    flex: 3.7,
  },
});
