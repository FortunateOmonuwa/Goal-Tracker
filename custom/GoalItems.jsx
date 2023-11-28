import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
//import CheckBox from "@react-native-community/";

//import React, { useState } from "react";
const Items = ({ goal, deleteGoal }) => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View key={goal} style={styles.items}>
        <Text style={{ color: "#fff", fontWeight: "600" }}>{goal}</Text>
        <Button title="❌" color={"#5e0acc"} onPress={deleteGoal} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  items: {
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
    padding: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Items;
