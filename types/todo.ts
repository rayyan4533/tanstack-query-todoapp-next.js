import { z } from "zod";

export const TodoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;

export const CreateTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export type CreateTodo = z.infer<typeof CreateTodoSchema>;
