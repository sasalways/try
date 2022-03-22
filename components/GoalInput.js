import react from "react";
import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput, Modal } from "react-native";
export default function GoalInput(props) {
  const [enterGoal, SetEnterGoal] = useState("");

  function TextHandler(EntertEXT) {
    SetEnterGoal(EntertEXT);
  }
  return (
    <Modal
      style={Styles.forModal}
      visible={props.visible}
      animationType="slide"
    >
      <View style={Styles.inputWrapper}>
        <TextInput
          style={Styles.input}
          placeholder="Enter Your Goal"
          onChangeText={TextHandler}
          value={enterGoal}
        />
        <View style={Styles.containerforbuttons}>
          <Button
            title="ADD"
            onPress={function () {
              SetEnterGoal("");
              props.onAddGoal(enterGoal);
            }}
          />
          <Button
            title="Cancel"
            onPress={function () {
              props.cancel(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
const Styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  containerforbuttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
