import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";

const TODOS_STORAGE_KEY = "@3taskxday:todos";

const getCurrentDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};

const initialTodos = [
  { id: 1, text: "", completed: false },
  { id: 2, text: "", completed: false },
  { id: 3, text: "", completed: false },
];

export const createTodoStore = () => {
  let listeners = [];

  let state = {
    todos: [...initialTodos],
    lastUpdated: getCurrentDate(),
  };

  const notify = () => {
    listeners.forEach((listener) => listener(state));
  };

  const loadTodos = async () => {
    try {
      const storedData = await AsyncStorage.getItem(TODOS_STORAGE_KEY);

      if (storedData) {
        const parsedData = JSON.parse(storedData);

        const currentDate = getCurrentDate();
        if (parsedData.lastUpdated !== currentDate) {
          state = {
            todos: [...initialTodos],
            lastUpdated: currentDate,
          };
        } else {
          state = parsedData;
        }
        notify();
      }
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    notify();
    saveTodos();
  };

  const actions = {
    updateTodoText: (id, text) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo,
      );
      setState({ todos: updatedTodos });
    },

    updateTodoStatus: (id, completed) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo,
      );
      setState({ todos: updatedTodos });
    },

    resetTodos: () => {
      setState({
        todos: [...initialTodos],
        lastUpdated: getCurrentDate(),
      });
    },
  };

  loadTodos();

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    actions,
  };
};

const todoStore = createTodoStore();

export const useTodoStore = () => {
  const [state, setState] = useState(todoStore.getState());

  useEffect(() => {
    const unsubscribe = todoStore.subscribe((newState) => {
      setState(newState);
    });

    return unsubscribe;
  }, []);

  return {
    todos: state.todos,
    lastUpdated: state.lastUpdated,
    updateTodoText: useCallback(
      (id, text) => todoStore.actions.updateTodoText(id, text),
      [],
    ),
    updateTodoStatus: useCallback(
      (id, completed) => todoStore.actions.updateTodoStatus(id, completed),
      [],
    ),
    resetTodos: useCallback(() => todoStore.actions.resetTodos(), []),
  };
};
