"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  refreshKey: number;
  ondeleteTodo: () => void;
};

export default function TodoList({
  refreshKey,ondeleteTodo
}:TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  
  useEffect(() => {
    async function fetchTodos() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get<Todo[]>("/api/todos");

        setTodos(response.data);
      } catch (error) {
        setError("Failed to fetch todos");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTodos();
  }, [refreshKey]);

  async function toggleTodo(todo: Todo) {
    try {
      const response = await axios.patch<Todo>(
        `/api/todos/${todo.id}`,
        {
          completed: !todo.completed,
        }
      );

      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo.id === todo.id
            ? response.data
            : currentTodo
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 return (
  <div className="space-y-3">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onTodoDeleted={ondeleteTodo}
      />
    ))}
  </div>
);
}
