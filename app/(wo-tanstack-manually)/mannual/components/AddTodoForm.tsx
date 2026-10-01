"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateTodo,
  CreateTodoSchema,
  Todo,
} from "@/types/todo";

type AddTodoFormProps = {
  onTodoCreated: () => void;
};

export default function AddTodoForm({
  onTodoCreated
}: AddTodoFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodo>({
    resolver: zodResolver(CreateTodoSchema),
  });

  async function onSubmit(data: CreateTodo) {
    try {
      const response = await axios.post<Todo>("/api/todos", data);

      console.log("Created todo:", response.data);

      reset();
      onTodoCreated();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mb-6"
    >
      <div className="flex gap-2">
        <input
          {...register("title")}
          placeholder="Enter todo"
          className="border px-3 py-2"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="border px-4 py-2"
        >
          {isSubmitting ? "Adding..." : "Add Todo"}
        </button>
      </div>

      {errors.title && (
        <p className="text-red-500">
          {errors.title.message}
        </p>
      )}
    </form>
  );
}
