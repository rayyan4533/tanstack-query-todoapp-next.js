"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";

type TodoCountProps = {
  refreshKey: number;
};

export default function TodoCount({
  refreshKey,
}: TodoCountProps) {
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
        setError("Failed to fetch todo count");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTodos();
  }, [refreshKey]);

  if (isLoading) {
    return <p>Counting todos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <p className="mb-4">
      Total todos: {todos.length}
    </p>
  );
}