import "./App.css";
import Hedear from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  console.log(todos);
  

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };
  

  return (
    <div className="App">
      <Hedear />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}


export default App;
