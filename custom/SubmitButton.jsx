import { Button, StyleSheet } from "react-native";

const Submit = ({ title, onClick }) => {
  return <Button title={title} onPress={onClick} />;
};

export default Submit;
