"use client";

import AddTodoForm from "../components/AddTodoForm";
import TodoCount from "../components/TodoCount";
import TodoList from "../components/TodoList";



export default function Home() {
  return (
    <main className="workspace-shell">
      <div className="workspace-container">
        <header className="workspace-header">
          <div className="brand-lockup">
            <span className="brand-mark">T</span>
            <div>
              <strong>task / flow</strong>
              <span>personal command center</span>
            </div>
          </div>
          {/* <div className="online-status"><span /> all systems clear</div> */}
        </header>

        <section className="workspace-hero">
          <div>
            <p className="kicker">Thursday, October 1, 2026</p>
            <h1>Make room for<br /><em>good work.</em></h1>
            <p className="hero-copy">A quiet place to capture what matters, finish what you start, and keep momentum visible.</p>
          </div>
          <aside className="focus-note">
            <small>FOCUS NOTE</small>
            <p>Small steps compound.</p>
            <i />
          </aside>
        </section>

        <section className="workspace-grid">
          <div className="task-column">
            <div className="section-title">
              <div><p className="kicker">Your workspace</p><h2>Today&apos;s queue</h2></div>
              <span>01 / 10</span>
            </div>
            <AddTodoForm />
            <TodoList />
          </div>
          <aside className="summary-column">
            <TodoCount />
            <div className="nudge-card">
              <div className="nudge-mark">+</div>
              <p className="kicker">A gentle nudge</p>
              <h3>Done is a direction, not a destination.</h3>
              <p>Keep the next action clear and let the list do the remembering.</p>
            </div>
          </aside>
        </section>

        <footer className="workspace-footer"><span>Built for momentum</span><span>TanStack Query workspace</span></footer>
      </div>
    </main>
  );
}
