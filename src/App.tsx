import TodoList from "./components/TodoList/TodoList.tsx";
import TodoAdd from "./components/TodoAdd/TodoAdd.tsx";
import TodosProvider from "./context/TodosProvider.tsx";

function App() {
  return (
    <TodosProvider>
      <div>
        <h1>Typescript Todo List App</h1>
        <TodoAdd />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default App;
