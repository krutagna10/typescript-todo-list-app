import React from "react";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  onEditTodo: (editedTodo: Todo) => void;
  onDeleteTodo: (deleteId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEditTodo,
  onDeleteTodo,
}) => {
  return (
    <>
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>IsCompleted</th>
            <th>Edit / Save Button</th>
            <th>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              onEditTodo={onEditTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export type { TodoListProps };
export default TodoList;
