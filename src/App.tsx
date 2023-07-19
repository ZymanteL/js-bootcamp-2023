import "./App.css";
import Hedear from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteCompletedTodos = () => {
    const filteredTodos = todos.filter((todo) => {
      return !todo.complete;
    });
    setTodos(filteredTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <div className="App">
      <Hedear todos={todos} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </div>
  );
}

export default App;
