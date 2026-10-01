
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
    
          <Link
            href="/tanstack-main-page"
            className="rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            TanStack Query todo app
          </Link>
      
    </main>
  );
}
