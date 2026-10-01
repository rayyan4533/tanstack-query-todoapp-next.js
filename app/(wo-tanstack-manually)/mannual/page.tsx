"use client"

import Link from "next/link";

import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";


export default function Home() {

  const [refreshKey, setRefreshKey] = useState<number>(0);

  function refreshTodos() {
    setRefreshKey((currentKey) => currentKey + 1);
  }

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">
        Painful Todo App
      </h1>
<Link
  href="/upload-documents"
  className="underline"
>
  Go to Upload Documents
</Link>
      <AddTodoForm onTodoCreated={refreshTodos} />
      <TodoCount refreshKey={refreshKey} /> 
      <TodoList
  refreshKey={refreshKey}
  ondeleteTodo={refreshTodos}
/>
    </main>
  );
}
