import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["one", "two", "three"]);

  return (
    <div className="center">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
