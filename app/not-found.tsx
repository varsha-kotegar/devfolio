import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="tag mb-4 text-signal">Error / null result</p>
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
        404 — this data point doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        Checked the dataset twice. Whatever you were looking for isn&apos;t in this sample —
        might&apos;ve been dropped during cleaning, or never collected at all.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 hover:bg-signal"
      >
        Back to the main dataset
      </Link>
    </main>
  );
}
