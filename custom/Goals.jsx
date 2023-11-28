import { View, Text, StyleSheet, ScrollView } from "react-native";
import Items from "./GoalItems";
const Goals = ({ goals, deleteGoal }) => {
  const goalItems = goals.map((goal) => {
    return <Items key={goal} goal={goal} deleteGoal={deleteGoal} />;
  });
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Goals</Text>
      <View style={styles.Items}>{goalItems}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
    paddingBottom: 20,
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
