import { NextRequest, NextResponse } from "next/server";
import { todos } from "@/lib/todos";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo) {
    return NextResponse.json(
      { message: "Todo not found" },
      { status: 404 }
    );
  }

  todo.completed = body.completed;

  return NextResponse.json(todo);
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const todoIndex = todos.findIndex(
    (todo) => todo.id === Number(id)
  );

  if (todoIndex === -1) {
    return NextResponse.json(
      { message: "Todo not found" },
      { status: 404 }
    );
  }

  todos.splice(todoIndex, 1);

  return NextResponse.json({
    message: "Todo deleted",
  });
}