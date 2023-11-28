import { View, Text, StyleSheet } from "react-native";
//import Items from "./GoalItems";
const Goals = ({ goals }) => {
  const goalItems = goals.map((goal) => {
    return <Text key={goal}>{goal}</Text>;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Goals</Text>
      <View style={styles.Items}>{goalItems}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    gap: 20,
    paddingVertical: 10,
  },
  Items: {
    gap: 10,
  },
});

export default Goals;
