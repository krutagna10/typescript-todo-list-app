import React, {useReducer} from "react";
import TodosContext from "./TodosContext.tsx";
import INITIAL_TODOS from "../data/data.ts";
import Todo from "../models/todo.ts";

type ACTION_TYPE =
  | { type: "add-todo"; payload: Todo }
  | { type: "edit-todo"; payload: Todo }
  | { type: "delete-todo"; payload: string };

function reducer(todos: Todo[], action: ACTION_TYPE): Todo[] {
  switch (action.type) {
    case "add-todo": {
      return [...todos, action.payload];
    }
    case "edit-todo": {
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    }
    case "delete-todo": {
      return todos.filter((todo) => todo.id !== action.payload);
    }
    default: {
      throw new Error("Invalid Action");
    }
  }
}

interface TodosProviderProps {
  children: React.ReactNode,
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, dispatch] = useReducer(reducer, INITIAL_TODOS);

  function handleAddTodo(title: string, isCompleted: boolean) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: isCompleted,
    };
    dispatch({ type: "add-todo", payload: newTodo });
  }

  function handleEditTodo(editedTodo: Todo) {
    dispatch({ type: "edit-todo", payload: editedTodo });
  }

  function handleDeleteTodo(deleteId: string) {
    dispatch({ type: "delete-todo", payload: deleteId });
  }
  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
    onEditTodo: handleEditTodo,
    onDeleteTodo: handleDeleteTodo,
  }
  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;