import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Items from "./GoalItems";
const Goals = ({ goals, deleteGoal }) => {
  //   const goalItems = goals.map((goal) => {
  //     return <Items key={goal} goal={goal} deleteGoal={deleteGoal} />;
  //   });
  return (
    <FlatList
      data={goals}
      renderItem={(itemData) => {
        return (
          <View style={styles.container}>
            <Items item={itemData} deleteGoal={deleteGoal} />
          </View>
        );
      }}
      style={styles.container}
    />
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
