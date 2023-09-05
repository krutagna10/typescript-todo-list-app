import { useReducer } from "react";
import INITIAL_TODOS from "./data/data";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./models/todo";
import TodoAdd from "./components/TodoAdd/TodoAdd";

type ACTION_TYPE =
  | { type: "add-todo"; newTodo: Todo }
  | { type: "edit-todo"; editedTodo: Todo }
  | { type: "delete-todo"; deleteId: string };

function reducer(todos: Todo[], action: ACTION_TYPE): Todo[] {
  switch (action.type) {
    case "add-todo": {
      return [...todos, action.newTodo];
    }
    case "edit-todo": {
      return todos.map((todo) =>
        todo.id === action.editedTodo.id ? action.editedTodo : todo,
      );
    }
    case "delete-todo": {
      return todos.filter((todo) => todo.id !== action.deleteId);
    }
    default: {
      throw new Error("Invalid Action");
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, INITIAL_TODOS);

  function handleAddTodo(title: string, isCompleted: boolean) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: isCompleted,
    };
    dispatch({ type: "add-todo", newTodo: newTodo });
  }

  function handleEditTodo(editedTodo: Todo) {
    dispatch({ type: "edit-todo", editedTodo: editedTodo });
  }

  function handleDeleteTodo(deleteId: string) {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  }

  return (
    <div>
      <h1>Typescript Todo List App</h1>
      <TodoAdd onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
