import "./Header.css";

interface HedearProps {
  todos: Array<Todo>;
}

const Header: React.FC<HedearProps> = ({ todos }) => {
  return (
    <>
      <h1 className="app-header-h1">Todo App </h1>
      <p className="app-header-p">Remaining todos: {todos.length}</p>
    </>
  );
};

export default Header;
