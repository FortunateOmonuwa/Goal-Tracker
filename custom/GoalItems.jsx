import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
//import CheckBox from "@react-native-community/";

//import React, { useState } from "react";
const Items = ({ item, deleteGoal }) => {
  return (
    <View style={{ width: "100%" }}>
      <View key={item.item.key} style={styles.items}>
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          {item.item.text}
        </Text>
        <Button title="❌" color={"#5e0acc"} onPress={deleteGoal} />
      </View>
    </View>
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
