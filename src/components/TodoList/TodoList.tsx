import "./TodoList.css";
import { TodoListItem } from "../TodoListItem/TodoListItem";
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteCompletedTodos: DeleteCompleted;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteCompletedTodos,
}) => {
  const displayDelete = () => {
    if (todos.length > 0) {
      return (
        <button
          className="delete-button"
          onClick={() => deleteCompletedTodos(todos)}
        >
          Delete todos
        </button>
      );
    }
  };

  return (
    <ul className="flex">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
      <div className="button-box">{displayDelete()}</div>
    </ul>
  );
};
