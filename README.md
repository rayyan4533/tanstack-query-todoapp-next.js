# Todo App with TanStack Query

A Next.js todo application built to understand the difference between manual server-state management and TanStack Query.

## Tech Stack

- Next.js
- TypeScript
- TanStack Query
- Axios
- React Hook Form
- Zod
- Tailwind CSS

## Features

- Fetch todos
- Create todos
- Update completion status
- Delete todos
- Form validation with Zod
- Form handling with React Hook Form
- Server-state caching with TanStack Query
- Query invalidation after mutations

## Project Structure

```text
app/
├── api/
│   └── todos/
│       ├── route.ts
│       └── [id]/
│           └── route.ts
├── components/
│   ├── AddTodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── hooks/
│   └── useTodos.ts
├── providers.tsx
└── page.tsx

lib/
└── todos.ts

types/
└── todo.ts
```

## TanStack Query Usage

The app uses custom hooks to keep server-state logic separate from UI components.

Examples:

```ts
useTodos();
useCreateTodo();
useUpdateTodo();
useDeleteTodo();
```

`useQuery` is used for reading todos, while `useMutation` is used for creating, updating, and deleting them.

After a mutation succeeds, the todos query is invalidated:

```ts
queryClient.invalidateQueries({
  queryKey: ["todos"],
});
```

This allows components using the same query to receive updated server data without manually passing refresh callbacks through the component tree.

## Running the Project

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Note

Todos are currently stored in an in-memory array rather than a database, so they reset whenever the development server restarts.