import { useState, ChangeEvent, FormEvent } from "react";
import "./TodoForm.css";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Add your new task..."
        onChange={handleChange}
      ></input>
      <button type="submit" className="add-todo-button" onClick={handleSubmit}>
        Add a todo
      </button>
    </form>
  );
};
