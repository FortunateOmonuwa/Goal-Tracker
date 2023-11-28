import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import Input from "./custom/GoalInput";
import Submit from "./custom/SubmitButton";
import Goals from "./custom/Goals";
import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [input, setInput] = useState({
    id: "",
    text: "",
  });
  const [goals, setGoals] = useState([]);
  const hangleInput = (e) => {
    //console.log(e);
    setInput(e);
  };
  const handleSubmit = () => {
    console.log(input);
    const [id, text] = input;
    const newInput = {
      //id: uuidv4(),
      text: input.text,
    };
    setGoals((prevGoals) => [...prevGoals, input]);

    setInput({ id: "", text: "" });
  };

  const handleDelete = (goal) => {
    //console.log(goal);
    setGoals((items) => items.filter((item) => item !== goal));
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="enter your goal"
          onChangeText={hangleInput}
          value={input.text}
        />
        <Submit title="submit" onClick={handleSubmit} />
      </View>
      <View style={styles.goals}>
        <Goals goals={goals} deleteGoal={handleDelete} />
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
    width: "100%",
  },
});
