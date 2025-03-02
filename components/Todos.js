import { View } from "react-native";
import Todo from "./Todo";
import { useTodoStore } from "../store/todo";

export default function Todos() {
  const { todos } = useTodoStore();

  return (
    <View>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        );
      })}
    </View>
  );
}
