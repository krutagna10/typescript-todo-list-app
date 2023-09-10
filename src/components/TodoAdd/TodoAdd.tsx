import React, {useContext, useState} from "react";
import TodosContext from "../../context/TodosContext.tsx";

const TodoAdd = () => {
  const { onAddTodo  } = useContext(TodosContext);
  const [title, setTitle] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  function handleIsCompletedChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setIsCompleted(event.target.checked);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onAddTodo(title, isCompleted);
  }

  return (
    <>
      <h2>Add Todo</h2>
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <input
          className="w-full"
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Enter title"
          required
        />
        <div className="flex gap-1">
          <label className="text-lg" htmlFor="checkbox">
            Completed:
          </label>
          <input
            id="checkbox"
            type="checkbox"
            onChange={handleIsCompletedChange}
          />
        </div>
        <button className="btn btn--green">Add Todo</button>
      </form>
    </>
  );
};

export default TodoAdd;
