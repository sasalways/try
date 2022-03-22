import react from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function GoalItem(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onDelete.bind(this, props.itemId)}
    >
      <View style={Styles.ListItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  ListItem: {
    padding: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 3,
    margin: 5,
  },
});
