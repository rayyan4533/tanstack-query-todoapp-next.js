import { NextResponse } from "next/server";
import { todos } from "@/lib/todos";
import { CreateTodoSchema } from "@/types/todo";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const body = await request.json();

  const result = CreateTodoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Invalid request body",
        errors: result.error.flatten(),
      },
      {
        status: 400,
      }
    );
  }

  const newTodo = {
    id: Date.now(),
    title: result.data.title,
    completed: false,
  };

  todos.push(newTodo);

  return NextResponse.json(newTodo, {
    status: 201,
  });
}
