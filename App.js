import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

let i = 0;
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isActive, SetActive] = useState(false);
  function GoalHandler(GetGoal) {
    setCourseGoal((currenGoal) => [{ key: i++, data: GetGoal }, ...currenGoal]);
    SetActive(false);
  }
  function removeGoalHandler(id) {
    console.log(id);
    setCourseGoal((currenGoal) => {
      return currenGoal.filter((goal) => goal.key !== id);
    });
  }
  return (
    <View style={styles.container}>
      <Button
        title="Add a new Goal"
        onPress={function () {
          SetActive(true);
        }}
      />
      <GoalInput
        cancel={SetActive}
        visible={isActive}
        onAddGoal={GoalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            itemId={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.data}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
