# Todo Query Learning

This is the project state before introducing TanStack Query.

## Included

- Next.js App Router
- TypeScript
- Axios
- Zod
- React Hook Form
- GET `/api/todos`
- POST `/api/todos`
- PATCH `/api/todos/[id]`
- Todo checkbox toggling
- Manual local state synchronization

## Run

```bash
pnpm install
pnpm dev
```

Then open:

```text
http://localhost:3000
```

## Important learning point

Adding a todo with the form successfully updates the backend array, but the
`TodoList` component does not automatically refetch. That stale-state problem
is intentional and is the next thing to solve manually before introducing
TanStack Query.

The todos are stored in memory, so restarting the dev server resets them.
