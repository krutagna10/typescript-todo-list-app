import React, {useContext, useState} from "react";
import Todo from "../../models/todo";
import TodosContext from "../../context/TodosContext.tsx";

interface TodoItemProps {
  index: number;
  todo: Todo;
}

const TodoItem = ({ index, todo }: TodoItemProps) => {
  const { onEditTodo, onDeleteTodo } = useContext(TodosContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleToggleIsEditing() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onEditTodo({ ...todo, title: event.target.value });
  }

  function handleIsCompletedChange(event: React.ChangeEvent<HTMLInputElement>) {
    onEditTodo({ ...todo, isCompleted: event.target.checked });
  }

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={todo.title}
            onChange={handleTitleChange}
            placeholder="Enter title"
          />
        ) : (
          todo.title
        )}
      </td>
      <td>
        <input
          type="checkbox"
          onChange={handleIsCompletedChange}
          checked={todo.isCompleted}
        />
      </td>
      <td>
        <button onClick={handleToggleIsEditing} className="btn btn--yellow">
          {isEditing ? "Save" : "Edit"} Todo
        </button>
      </td>
      <td>
        <button className="btn btn--red" onClick={handleDeleteTodo}>
          Delete Todo
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
