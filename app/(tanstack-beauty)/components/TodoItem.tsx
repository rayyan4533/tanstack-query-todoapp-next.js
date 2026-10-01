"use client";


import { Todo } from "@/types/todo";
import { useDeleteTodo } from "@/app/hooks/useTodos";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => void;
  isToggling: boolean;
};

export default function TodoItem({
  todo,
  onToggle,
  isToggling,
}: TodoItemProps) {

  const deleteTodoMutation = useDeleteTodo();
  return (
    <div className={todo.completed ? "task-row completed" : "task-row"}>
      <input
        type="checkbox"
        checked={todo.completed}
        disabled={isToggling || deleteTodoMutation.isPending}
        onChange={() => onToggle(todo.id, !todo.completed)}
        aria-label={`Mark ${todo.title} as ${todo.completed ? "incomplete" : "complete"}`}
        className="task-checkbox"
      />
      <div className="task-content">
        <span className="task-title">{todo.title}</span>
        <span className="task-meta">{todo.completed ? "Completed" : "In progress"}</span>
      </div>

      <button
        onClick={() => deleteTodoMutation.mutate(todo.id)}
        disabled={deleteTodoMutation.isPending || isToggling}
        className="delete-button"
        aria-label={`Delete ${todo.title}`}
      >
        {deleteTodoMutation.isPending ? "..." : "x"}
      </button>
    </div>
  );
}