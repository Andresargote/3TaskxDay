import { TextInput, View, StyleSheet } from "react-native";
import { Checkbox } from "expo-checkbox";
import { useTodoStore } from "../store/todo";

export default function Todo({ id, text, completed }) {
  const { updateTodoText, updateTodoStatus } = useTodoStore();
  const isDisabled = !text ? true : false;
  const isEditable = text && completed ? false : true;

  return (
    <View style={styles.todo}>
      <Checkbox
        value={completed}
        onValueChange={(value) => updateTodoStatus(id, value)}
        color="#46A758"
        disabled={isDisabled}
        style={{ width: 26, height: 26 }}
      />
      <TextInput
        cursorColor="#B4B4B4"
        selectionColor="#B4B4B4"
        value={text}
        style={[styles.todoInput, completed ? styles.completed : null]}
        onChangeText={(text) => updateTodoText(id, text)}
        placeholder={`Task #${id}`}
        editable={isEditable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    paddingVertical: 8,
    paddingHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  completed: {
    textDecorationLine: "line-through",
  },
  todoInput: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#111",
    paddingVertical: 12,
    paddingHorizontal: 8,

    width: "90%",
  },
});
