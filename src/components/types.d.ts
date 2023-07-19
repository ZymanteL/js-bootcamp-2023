type AddTodo = (newTodo: string) => void;

type Todo = {
    text: string;
    complete: boolean;
};
type ToggleComplete = (
    selectedTodo: Todo
) => void;

type DeleteCompleted = (deleteCompleted: todos) => void