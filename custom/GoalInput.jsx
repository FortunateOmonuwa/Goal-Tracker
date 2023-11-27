import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder }) => {
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    //color: "white",
  },
});

export default Input;
