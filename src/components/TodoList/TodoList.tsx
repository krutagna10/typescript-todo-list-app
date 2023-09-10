import TodoItem from "../TodoItem/TodoItem";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.tsx";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

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
            <TodoItem key={index} index={index} todo={todo} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
