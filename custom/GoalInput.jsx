import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChangeText}
      defaultValue={value}
    />
  );
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
