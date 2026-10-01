"use client";



import { useState } from "react";
import TodoItem from "./TodoItem";
import { useTodos, useUpdateTodo } from "@/app/hooks/useTodos";


export default function TodoList() {
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");
  const { data: todos, isLoading, error } = useTodos();

  const updateTodoMutation = useUpdateTodo();
  function toggleTodo(id: number, completed: boolean) {
    updateTodoMutation.mutate({
      id,
      completed,
    });
  }
 

  if (isLoading) {
    return <div className="empty-state">Loading your tasks...</div>;
  }

  if (error) {
    return <div className="empty-state">Could not load your tasks. Refresh to try again.</div>;
  }

  const visibleTodos = (todos ?? []).filter((todo) => {
    if (filter === "open") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  return (
    <section>
      <div className="list-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter tasks">
          {(["all", "open", "done"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={filter === option ? "filter-tab active" : "filter-tab"}
            >
              {option === "all" ? "All tasks" : option === "open" ? "Open" : "Completed"}
            </button>
          ))}
        </div>
        <span className="task-count">{visibleTodos.length} shown</span>
      </div>

      {visibleTodos.length === 0 ? (
        <div className="empty-state">
          <h3>{filter === "done" ? "No finished tasks yet" : "Your list is breathing room"}</h3>
          <p>{filter === "done" ? "Complete a task and it will land here." : "Add one clear next step above."}</p>
        </div>
      ) : (
        <div className="task-list">
          {visibleTodos.map((todo) => (
            <div key={todo.id} className="task-row-wrap">
          <TodoItem
            todo={todo}
            onToggle={toggleTodo}
            isToggling={
              updateTodoMutation.isPending &&
              updateTodoMutation.variables?.id === todo.id
            }
          />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
