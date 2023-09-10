import { createContext } from "react";
import Todo from "../models/todo.ts";

type TodosContextType = {
  todos: Todo[];
  onAddTodo: (title: string, isCompleted: boolean) => void;
  onEditTodo: (editedTodo: Todo) => void;
  onDeleteTodo: (deleteId: string) => void;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

export default TodosContext;
