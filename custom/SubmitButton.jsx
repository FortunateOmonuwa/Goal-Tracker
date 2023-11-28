import { Button, StyleSheet } from "react-native";

const Submit = ({ title, onClick }) => {
  return <Button title={title} onPress={onClick} color={"#5e0acc"} />;
};

export default Submit;
