"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateTodo,
  CreateTodoSchema,
  Todo,
} from "@/types/todo";
import { useCreateTodo } from "@/app/hooks/useTodos";


export default function AddTodoForm() {
  const createTodo = useCreateTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodo>({
    resolver: zodResolver(CreateTodoSchema),
  });

  function onSubmit(data: CreateTodo) {
    createTodo.mutate(data, {
      onSuccess: () => reset(),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="composer">
      <div className="composer-label">
        <span className="compose-mark">+</span>
        <span>Capture a new task</span>
      </div>
      <div className="composer-row">
        <input
          {...register("title")}
          placeholder="What needs your attention?"
          className="task-input"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={isSubmitting || createTodo.isPending}
          className="add-button"
        >
          {createTodo.isPending ? "Saving" : "Add task"}
          <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
      {errors.title && (
        <p className="form-error">{errors.title.message}</p>
      )}
      {createTodo.isError && <p className="form-error">Could not save that task. Try again.</p>}
    </form>
  );
}
