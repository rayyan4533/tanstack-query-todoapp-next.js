"use client";

import { useTodos } from "@/app/hooks/useTodos";



export default function TodoCount() {
  const { data: todos = [], isLoading, error } = useTodos();

  if (isLoading) {
    return <div className="stats-card">Loading your progress...</div>;
  }

  if (error) {
    return <div className="stats-card">Could not load your summary.</div>;
  }

  const completed = todos.filter((todo) => todo.completed).length;
  const progress = todos.length === 0 ? 0 : Math.round((completed / todos.length) * 100);

  return (
    <div className="stats-card">
      <p className="kicker">At a glance</p>
      <div className="progress-meter"><span style={{ width: `${progress}%` }} /></div>
      <div className="stats-numbers">
        <strong>{progress}%</strong>
        <div className="stats-copy">{completed} completed<br />{todos.length - completed} remaining</div>
      </div>
    </div>
  );
}