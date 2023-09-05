import Todo from "../models/todo";

const INITIAL_TODOS: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "Jog around the park",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "10 minutes meditation",
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Pick up groceries",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Study",
    isCompleted: true,
  },
];
export default INITIAL_TODOS;
