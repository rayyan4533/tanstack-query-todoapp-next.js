"use client";

import axios from "axios";
import { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onTodoDeleted: () => void;
};

export default function TodoItem({
  todo,
  onTodoDeleted,
}: TodoItemProps) {
  async function deleteTodo() {
    try {
      await axios.delete(`/api/todos/${todo.id}`);

      onTodoDeleted();
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span>{todo.title}</span>

      <button
        onClick={deleteTodo}
        className="border px-2 py-1"
      >
        Delete
      </button>
    </div>
  );
}