import Link from "next/link";

export default function UploadDocumentsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Upload Documents
      </h1>

      <Link
        href="/"
        className="underline inline-block mt-4"
      >
        Back to Todos
      </Link>
    </main>
  );
}