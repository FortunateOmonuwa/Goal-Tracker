import { View, Text, StyleSheet } from "react-native";
import Items from "./GoalItems";
const Goals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Goals</Text>
      <View style={styles.Items}>
        <Text>Something something something</Text>
        <Text>Something something something</Text>
        <Text>Something something something</Text>
        <Text>Something something something</Text>
        <Text>Something something something</Text>
        <Text>Something something something</Text>
      </View>
      <Items />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "600",
  },

  Items: {
    gap: 10,
  },
  container: {
    gap: 20,
    paddingVertical: 10,
  },
});

export default Goals;
