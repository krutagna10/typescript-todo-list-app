import { useState } from "react";
import INITIAL_TODOS from "./data/data";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./models/todo";
import TodoAdd from "./components/TodoAdd/TodoAdd";

function App() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  function handleAddTodo(title: string, isCompleted: boolean) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: isCompleted,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleEditTodo(editedTodo: Todo) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo,
      );
    });
  }

  function handleDeleteTodo(deleteId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== deleteId);
    });
  }

  return (
    <div>
      <h1>Typescript Todo List App</h1>
      <TodoAdd onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
